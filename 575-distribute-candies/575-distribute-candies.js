/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  const n = candyType.length / 2;
  const type = new Set(candyType);
  return n < type.size ? n : type.size;  
};