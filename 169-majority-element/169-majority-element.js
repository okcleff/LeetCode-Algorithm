/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  nums.map((x) => {
    obj[x] ? (obj[x] = obj[x] + 1) : (obj[x] = 1);
  });
  
  let swap = {};
  for (key in obj) {
    swap[obj[key]] = key;
  }
  
  let arr = [];
  for (key in swap) {
    arr.push(key).sort;
  }

  return parseInt(swap[arr[arr.length - 1]]);
};