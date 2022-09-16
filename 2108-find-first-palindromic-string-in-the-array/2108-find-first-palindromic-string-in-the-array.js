/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
	const isPalindromic = (str) => {
		let left = 0;
		let right = str.length - 1;
		while (left <= right) {
			if (str[left] !== str[right]) return false;
			left++;
			right--;
		}
		return str;
	};

	for (let i = 0; i < words.length; i++) {
		if (isPalindromic(words[i])) return isPalindromic(words[i]);
	}

	return '';
};