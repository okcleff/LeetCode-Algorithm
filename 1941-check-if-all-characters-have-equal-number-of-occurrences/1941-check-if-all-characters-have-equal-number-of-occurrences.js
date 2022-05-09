/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  const dict = {};
  for (let char of s) {
    dict[char] = (dict[char] || 0) + 1;
  }
  return new Set(Object.values(dict)).size === 1;
};