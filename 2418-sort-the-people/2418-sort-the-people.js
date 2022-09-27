/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const pair = names
		.map((name, i) => {
			return [name, heights[i]];
		})
		.sort((a, b) => b[1] - a[1]);

	return pair.map((pair) => pair[0]);
};