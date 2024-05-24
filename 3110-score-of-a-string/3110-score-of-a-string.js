/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
  let answer = 0;
  for (let i = 1; i < s.length; i++) {
    answer += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  }
  return answer;
};