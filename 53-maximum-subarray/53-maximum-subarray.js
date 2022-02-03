/**
 * @param {number[]} nums
 * @return {number}
 */

// function reducer(array) {
//   if (array.length === 1) {
//     return array[0];
//   } else {
//     let result = Number.MIN_SAFE_INTEGER;
//     array.reduce(function (a, b) {
//       return (result = Math.max(a, b));
//     });
//     return result;
//   }
// }

var maxSubArray = function(nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   } else {
//     let arr = [...nums];
//     for (let i = 0; i < nums.length; i++) {
//       let sum = nums[i];
//       for (let j = i + 1; j < nums.length; j++) {
//         sum = sum + nums[j];
//         arr.push(sum);
//       }
//     }
    
//     if (reducer(arr) > 0) {
//       return reducer(arr);
//     } else {
//       return reducer(nums);
//     }
//   }
    
    if(nums.length == 0) return 0;
    let result = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        sum = sum < 0 ? 0 : sum;
    }
    return result;
};