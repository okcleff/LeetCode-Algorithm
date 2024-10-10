/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
  let k = 0;
  let repeatedWords = word;
  
  while (sequence.includes(repeatedWords)) {
    k++;
    repeatedWords += word;
  }
  
  return k;
};