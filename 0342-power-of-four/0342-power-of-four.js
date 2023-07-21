/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  const helper = num => {
    if(num === 1) return true;
    if(num < 4) return false;
        
    return helper(num / 4)
  }
  
  return helper(n)
};