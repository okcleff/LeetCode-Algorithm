/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let answer = [];
  if (n % 2 === 0) {
    for (let i = 1; i <= n * 0.5; i++) {
      answer = [...answer, i, -i];
    }
  } else {
    answer.push(0);
    for (let i = 1; i < n * 0.5; i++) {
      answer = [...answer, i, -i];
    }
  }
  return answer;
};