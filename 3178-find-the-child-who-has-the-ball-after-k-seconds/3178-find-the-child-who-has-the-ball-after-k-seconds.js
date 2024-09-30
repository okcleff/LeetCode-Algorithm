/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
  n--;
  const rounds = Math.floor(k / n);
  const holder = k % n;

  return rounds % 2 === 0 ? holder : n - holder;
};