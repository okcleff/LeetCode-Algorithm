/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
  const indices = [];
  
  nums.forEach((num, idx) => {
    if (num === x) indices.push(idx);
  })
  
  const answer = [];
  
  queries.forEach(query => {
    answer.push(query > indices.length ? -1 : indices[query - 1]);
  })
  
  return answer;
};