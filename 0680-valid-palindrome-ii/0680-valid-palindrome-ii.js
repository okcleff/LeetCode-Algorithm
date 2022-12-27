/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	let p1 = 0;
	let p2 = s.length - 1;

	while (p1 < p2) {
		if (s[p1] !== s[p2])
			return isValidPalindrome(s, p1 + 1, p2) || isValidPalindrome(s, p1, p2 - 1);
		p1++;
		p2--;
	}

	return true;
};

const isValidPalindrome = (s, p1, p2) => {
	while (p1 < p2) {
		if (s[p1] !== s[p2]) return false;
		p1++;
		p2--;
	}

	return true;
};