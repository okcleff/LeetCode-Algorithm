/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  let answer = 0;
  while(n > 1) {
    answer = answer + Math.floor(n/2);
    n = Math.ceil(n/2);
  }
  return answer;
};