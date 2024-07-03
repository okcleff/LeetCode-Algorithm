/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
  let i = 0;
  while (i < s1.length && s1[i] === s2[i] && s2[i] === s3[i]) {
    i++;
  }
  return i ? (s1.length + s2.length + s3.length) - (3 * i) : -1;
};