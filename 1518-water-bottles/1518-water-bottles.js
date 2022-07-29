/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
	let answer = numBottles;
	while (numBottles >= numExchange) {
		let empty = parseInt(numBottles / numExchange);
		answer += empty;
		numBottles = empty + (numBottles % numExchange);
	}
	return answer;
};