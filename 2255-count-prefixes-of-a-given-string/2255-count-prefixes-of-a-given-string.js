/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  let answer = 0;
  for (let i = s.length; i > 0; i--) {
    answer += words.filter((char) => char === s.slice(0, i)).length;
  }
  return answer;
};