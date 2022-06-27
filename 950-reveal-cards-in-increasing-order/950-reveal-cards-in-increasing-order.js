/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
	deck.sort((a, b) => a - b);
	const answer = [];
	while (deck.length) {
		answer.unshift(deck.pop());
		answer.unshift(answer.pop());
	}
	answer.push(answer.shift());
	return answer;
};