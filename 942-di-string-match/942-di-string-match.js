/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let answer = [],
    low = 0,
    high = s.length;
  for (let i = 0; i <= s.length; i++) {
    s.charAt(i) == 'I' ? answer.push(low++) : answer.push(high--);
  }

  return answer;
};