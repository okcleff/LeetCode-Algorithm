/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
  let answer = 0;

  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      for (let k = 0; k <= limit; k++) {
        if (i + j + k === n) {
          answer++;
        }
      }
    }
  }

  return answer;
};