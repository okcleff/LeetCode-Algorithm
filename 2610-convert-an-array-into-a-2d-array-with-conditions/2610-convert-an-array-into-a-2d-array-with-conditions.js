/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  const map = {};
  
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  const answer = [];
  
  for (const key in map) {
    for (let i = 0; i < map[key]; i++) {
      answer[i] = [...(answer[i] || []), key];
    }
  }
  
  return answer;
};