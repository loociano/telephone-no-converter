var assert = require('assert');
var converter = require('../src/converter');

describe('Telephone number conversion', function(){

  it('should remove spaces', function () {
    assert.equal(converter.convertPhoneNumber('+44 123 456 789'), '+44123456789');
  });

  it('should convert international code to plus form', function () {
    assert.equal(converter.convertPhoneNumber('0044123456789'), '+44123456789');
  });

  it('should detect missing international code', function () {
    assert.equal(converter.convertPhoneNumber('44123456789'), 'Missing international code');
  });

  it('should ignore spaces and symbols', function () {
    assert.equal(converter.convertPhoneNumber('+44 12_3-45x6789'), '+44123456789');
  });

  it('should ignore numbers in brackets', function () {
    assert.equal(converter.convertPhoneNumber('+44(0)123456789'), '+44123456789');
  });

  it('should not convert if number is not given', function () {
    assert.equal(converter.convertPhoneNumber(), '');
  });

  it('should ignore characters', function () {
    assert.equal(converter.convertPhoneNumber('+44123456789 Name'), '+44123456789');
    assert.equal(converter.convertPhoneNumber('+44123456789Name LastName'), '+44123456789');
  });

});