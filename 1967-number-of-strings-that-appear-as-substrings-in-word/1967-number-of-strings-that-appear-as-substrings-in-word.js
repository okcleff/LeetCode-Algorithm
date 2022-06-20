/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
  return patterns.filter((char) => word.includes(char)).length;
};