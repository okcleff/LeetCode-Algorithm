/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
	while (k > 0) {
		const max = Math.max(...gifts);
		const index = gifts.indexOf(max);
		const sqrt = Math.floor(Math.sqrt(max));
		gifts[index] = sqrt;
		k--;
	}
	return gifts.reduce((acc, curr) => acc + curr, 0);  
};