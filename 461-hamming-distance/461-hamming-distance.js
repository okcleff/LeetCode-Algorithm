/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const arr = (x ^ y).toString(2).split('');
  let result = 0;
  arr.map((bit) => {
    if (bit === '1') result++;
  });
  return result;
};