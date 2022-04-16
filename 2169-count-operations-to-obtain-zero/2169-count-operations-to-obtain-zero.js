/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
  if(num1 === 0 || num2 === 0) return 0;
  if(num1 === num2) return 1;
  let count = 0;
  while(num1 > 0 || num2 > 0){
    if(num1 === num2) {
      count++;
      break;
    }
    num1 > num2 ? num1 = num1 - num2 : num2 = num2 - num1;
    count++;
  }
  return count;
};