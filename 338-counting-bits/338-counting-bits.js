/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [];
  const bin = (x) => {
    return x
      .toString(2)
      .split('')
      .filter((el) => el === '1').length;
  };
  for (let i = 0; i <= n; i++) {
    result.push(bin(i));
  }
  return result;
};