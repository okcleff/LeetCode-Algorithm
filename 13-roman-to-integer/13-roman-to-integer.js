/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let number = 0;

  for (i = 0; i < s.length; i++) {
    roman[s[i]] < roman[s[i + 1]]
      ? number -= roman[s[i]]
      : number += roman[s[i]];
  }
  return number;
};