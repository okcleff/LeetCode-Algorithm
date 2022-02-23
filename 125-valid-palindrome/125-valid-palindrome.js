/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /[^A-Za-z0-9]/g;
  const str = s.replace(regex, '').toLowerCase();
  const reverse = str.split('').reverse().join('');
  return str === reverse;
};