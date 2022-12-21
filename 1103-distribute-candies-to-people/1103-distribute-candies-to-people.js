/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, n) {
	const answer = new Array(n).fill(0);
	let currCandies = 1;
  
	while (candies > 0) {
		for (let i = 0; i < n; i++) {
			answer[i] +=
				candies > currCandies ? currCandies : candies > 0 ? candies : 0;
			candies -= currCandies;
			currCandies++;
		}
	}
  
	return answer;
};