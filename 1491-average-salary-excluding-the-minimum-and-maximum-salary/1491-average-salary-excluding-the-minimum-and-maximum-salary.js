/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  salary.sort((a, b) => a - b);
  salary.pop();
  salary.shift();
  return salary.reduce((a, b) => a + b) / salary.length;
};