/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let maxMove = 0;
  let oldMove = 0;
  let jump = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxMove = Math.max(maxMove, i + nums[i]);
    if (i === oldMove) {
      jump++;
      oldMove = maxMove;
    }
  }

  return jump;
};