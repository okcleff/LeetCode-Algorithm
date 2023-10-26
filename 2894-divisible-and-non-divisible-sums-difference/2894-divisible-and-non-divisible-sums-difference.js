/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
  let num1 = 0;
  let num2 = 0;
  
  for (let i = 0; i <= n; i++) {
    i % m ? (num1 += i) : (num2 += i);
  }
  
  return num1 - num2;
};