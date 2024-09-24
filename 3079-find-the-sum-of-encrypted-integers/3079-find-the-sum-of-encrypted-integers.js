/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
  const maximize = (str) => {
    const maxNum = Math.max(...str);
    return Number(new Array(str.length).fill(maxNum).join(''));
  }
  
  
  const encrypt = (num) => {
    const string = num.toString();
    return maximize(string);
  }
  
  return nums.reduce((acc, curr) => encrypt(curr) + acc, 0);
};