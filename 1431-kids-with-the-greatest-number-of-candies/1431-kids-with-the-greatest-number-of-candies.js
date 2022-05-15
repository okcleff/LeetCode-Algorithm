/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  return candies.map((num) =>
    num + extraCandies >= Math.max(...candies) ? true : false
  );
};