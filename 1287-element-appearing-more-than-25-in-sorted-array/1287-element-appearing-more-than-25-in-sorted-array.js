/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const obj = {};
  arr.map(num => {
    obj[num] = (obj[num] || 0 ) +1;
  })
  
  for(let num in obj){
    if(obj[num] > arr.length / 4) return Number(num);
  }
};