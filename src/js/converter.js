'use strict';

if (typeof exports === 'undefined') {
  var exports = {};
}

/**
 * Converts a phone number to the form +44123456789.
 * Plus sign for international code. No spaces, characters or symbols
 *
 * @param {string} phone number
 * @return {string} converted phone number
 */
exports.convertPhoneNumber = function(number){

  if (!number) return '';

  number = number.replace(/\/([0-9]+)|\([a-zA-Z0-9_]\)|[^0-9+]/g, '');

  var zeros = '00';
  var plus = '+';

  if (number.substr(0, zeros.length) === zeros){
    number = plus + number.substring(zeros.length);
  } else {
    if (number.charAt(0) !== plus){
      number = plus + number;
    }
  }

  // ignore subsequent numbers
  number = plus + number.split(/\+/)[1];

  return number;
}