/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const arr = (BigInt([...digits].join('')) + BigInt(1)).toString().split('');
  const result = arr.map((el) => parseInt(el));
  return result;
};