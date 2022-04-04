/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const expected = [...heights].sort((a, b) => a - b);
  let counter = 0;
  heights.map((num, idx) => {
    if (num !== expected[idx]) counter++;
  });
  return counter;
};