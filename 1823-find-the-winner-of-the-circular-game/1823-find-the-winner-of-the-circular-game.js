/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
	let friends = [];
	for (let i = 0; i < n; i++) friends.push(i + 1);

	let loser = 0;
	while (friends.length > 1) {
		loser = (loser + k - 1) % friends.length;
		friends.splice(loser, 1);
	}

	return friends[0];
};