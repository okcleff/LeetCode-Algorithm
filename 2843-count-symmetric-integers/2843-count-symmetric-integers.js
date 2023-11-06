/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let answer = 0;
  
  for (let i = low; i <= high; i++) {
    const s = String(i);
    
    if (!(s.length % 2)) {
      let left = 0;
      let right = 0;
      
      for (let j = 0; j < s.length / 2; j++) {
        left += +s[j];
        right += +s[s.length - j - 1]
      }

      if (left === right) answer++;
    }
  }

  return answer;
};