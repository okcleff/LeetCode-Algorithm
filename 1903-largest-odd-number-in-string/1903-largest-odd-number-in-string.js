/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  if (Number(num.slice(-1)) % 2 !== 0) return num;
  
  for (let i = num.length - 1; i > 0; i--) {
    if (parseInt(num[i - 1]) % 2 !== 0) {
      return num.substring(0, i);
    }
  }
  
  return '';
};