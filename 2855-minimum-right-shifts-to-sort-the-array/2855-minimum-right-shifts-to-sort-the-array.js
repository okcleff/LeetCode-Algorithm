/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function(nums) {
  const leng = nums.length;
  const sortedNums = [...nums].sort((a, b) => a - b).toString();
  let answer = 0;
  
  const isSorted = (nums) => {
    return nums.toString() === sortedNums;
  }
  

  for (let i = leng - 1; i >= 0; i--) {
    if (isSorted(nums)) return answer;
    const element = nums.pop();
    nums.unshift(element);   
    answer++;
  }
  
  return -1;
};

