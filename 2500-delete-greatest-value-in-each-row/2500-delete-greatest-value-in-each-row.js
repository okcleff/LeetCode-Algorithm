/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
	const leng = grid.length;
	let answer = 0;
  
	while (grid[0].length) {
		let maxArr = [];
		for (let i = 0; i < grid.length; i++) {
			let max = Math.max(...grid[i]);
			let maxIndex = grid[i].indexOf(max);

			maxArr.push(max);
			grid[i].splice(maxIndex, 1);
		}
		answer += Math.max(...maxArr);
	}
  
	return answer;
};