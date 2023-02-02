/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
	const answer = [pref[0]];
	for (let i = 1; i < pref.length; i++) {
		answer.push(pref[i] ^ pref[i - 1]);
	}
	return answer;
};