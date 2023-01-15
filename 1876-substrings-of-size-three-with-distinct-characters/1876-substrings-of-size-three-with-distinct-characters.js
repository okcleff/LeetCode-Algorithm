/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
  let answer = 0;
  for (let i = 0; i < s.length - 2; i++) {
    new Set([...s.substring(i, i + 3)]).size === 3 && answer++;
  }
  return answer;
};