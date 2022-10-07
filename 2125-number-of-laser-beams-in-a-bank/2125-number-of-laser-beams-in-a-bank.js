/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  bank = bank.filter((line) => line.includes('1'));
	if (bank.length === 1) return 0;

	const countLaser = (line) => {
		return [...line].filter((laser) => laser === '1').length;
	};

	let answer = 0;
	for (let i = 0; i < bank.length - 1; i++) {
		answer += countLaser(bank[i]) * countLaser(bank[i + 1]);
	}
	return answer;
};