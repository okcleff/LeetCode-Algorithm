/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result[i - 1] = 'FizzBuzz';
    } else if (i % 3 === 0) {
      result[i - 1] = 'Fizz';
    } else if (i % 5 === 0) {
      result[i - 1] = 'Buzz';
    } else {
      result[i - 1] = `${i}`;
    }
  }
  return result;
};