/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
  const array = Array(n).fill(1);

  for (let i = 0; i < k; i++) {
    for (let j = 1; j < n; j++) {
      array[j] = (array[j] + array[j - 1]) % (10 ** 9 + 7);
    }
  }
  
  return array[n - 1];
};