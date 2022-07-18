/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
  return words.filter(substring => words.some(word => word !== substring && word.includes(substring)));
};