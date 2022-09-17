/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const seq = [0, 1, 1];
  for (let i = 0; i < n - 2; i++) {
    seq.push(seq[i] + seq[i + 1] + seq[i + 2]);
  }
  return seq[n];
};