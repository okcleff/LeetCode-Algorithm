/**
 * @param {number} num
 * @return {number}
 */

function add(digit) {
  const str = String(digit);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum = sum + parseInt(str[i]);
  }
  digit = sum;
  return digit;
}

var addDigits = function (num) {
  if (num === 0) return 0;
  while (num >= 10) {
    num = add(num);
  }
  return num;
};