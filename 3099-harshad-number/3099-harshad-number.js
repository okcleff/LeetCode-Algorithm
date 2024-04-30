/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
  const sumOfDigits = x.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
  return x % sumOfDigits === 0 ? sumOfDigits : -1;
};