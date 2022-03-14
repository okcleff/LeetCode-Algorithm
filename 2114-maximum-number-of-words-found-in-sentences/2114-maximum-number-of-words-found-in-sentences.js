/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
  const length = sentences.map((el) => el.split(' ').length);
  return length.reduce((a, b) => Math.max(a, b));
};