/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
	const countLaser = (line) => {
		return [...line].filter((laser) => laser === '1').length;
	};

	bank = bank.filter((line) => !!countLaser(line));

	let answer = 0;
	if (bank.length === 1) return answer;

	for (let i = 0; i < bank.length - 1; i++) {
		answer += countLaser(bank[i]) * countLaser(bank[i + 1]);
	}
	return answer;
};