/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
	const makeHash = (str) => {
		const hash = {};
		for (let char of str) {
			hash[char] = hash[char] + 1 || 1;
		}
		return hash;
	};

	const hash1 = makeHash(word1);
	const hash2 = makeHash(word2);

	for (let key in hash1) {
		const diff = Math.abs(hash1[key] - (hash2[key] || 0));

		if (diff > 3) return false;
	}
  
	for (let key in hash2) {
		const diff = Math.abs(hash2[key] - (hash1[key] || 0));

		if (diff > 3) return false;
	}

	return true;
};