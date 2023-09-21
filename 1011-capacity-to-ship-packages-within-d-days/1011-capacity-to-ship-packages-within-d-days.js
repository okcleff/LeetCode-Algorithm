/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((a, b) => a + b);
  
  while (left < right){
    const mid = Math.floor((left + right) / 2);
    let needed = 1;
    let curr = 0;
        
    for (let i = 0; i < weights.length; i++) {
      if (curr + weights[i] > mid) {
        needed ++;
        curr = weights[i];
      } else {
        curr += weights[i];
      }
    }  
    
    if(needed > days) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  return left;
};