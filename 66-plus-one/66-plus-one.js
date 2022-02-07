/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   const arr = (BigInt([...digits].join('')) + BigInt(1)).toString().split('');
//   const result = arr.map((el) => parseInt(el));
//   return result;
// };

var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] ++;
      return digits;
    }
  }
  return [1, ...digits];
};