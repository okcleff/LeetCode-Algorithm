/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
  let answer = 0;
  let curr = 0;
  while (curr++ <= Math.min(a, b)) {
    if (!(a % curr) && !(b % curr)) answer++;
  }
  return answer;
};