/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
  const dictionary = {};
  for (let i = 1; i <= 10; i++) {
    dictionary[i] = 1;
  }
  
  const concatenated = n.toString() + (n * 2).toString() + (n * 3).toString();
  
  if (concatenated.includes('0') || concatenated.length !== 9) return false;

  
  for (const char of concatenated) {
    if (dictionary[char] === 0) return false;
    
    dictionary[char]--;
  }
  
  return true;  
};