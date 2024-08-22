/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  if (total % 3 !== 0) return false;
  
  const averageSum = total / 3;
  
  let partitionSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    partitionSum += arr[i];
    if (partitionSum === averageSum) {
      count++;
      partitionSum = 0;
    }
  }
  
  return count >= 3;
};