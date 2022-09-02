/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
  const hash = {};
  nums.map((num) => {
    hash[num] = hash[num] + 1 || 1;
  });

  let pair = 0;
  for (let key in hash) {
    while (hash[key] > 1) {
      hash[key] -= 2;
      pair++;
    }
  }

  let leftover = Object.values(hash).reduce((c, a) => c + a);
  
  return [pair, leftover];
};