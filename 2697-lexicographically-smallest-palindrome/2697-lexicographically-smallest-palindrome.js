/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  const leng = s.length;
  
  const arr = s.split('')
  
  for (let i = 0; i < leng / 2; i++) {
    if (arr[i] !== arr[leng - 1 - i]) {
      if (arr[i] < arr[leng - 1 - i]) {
        arr[leng - 1 - i] = arr[i];
      } else {
        arr[i] = arr[leng - 1 - i];
      }
    }
  }
  
  return arr.join('');
};