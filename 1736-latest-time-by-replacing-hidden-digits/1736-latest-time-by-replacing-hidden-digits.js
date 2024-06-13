/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
  const arr = [...time];
  
  return arr.map((digit, idx) => {
    if (digit !== '?') return digit;
    
    if (idx === 0) {
      if (Number(arr[1]) >= 4) {
        return 1;
      } else {
        return 2;
      }
    }
    
    if (idx === 1) {
      if (arr[0] === '2' || arr[0] === '?') {
        return 3;
      } else {
        return 9;
      }
    }
    
    if (idx === 3) return 5;
    
    if (idx === 4) return 9;
  }).join('');
};