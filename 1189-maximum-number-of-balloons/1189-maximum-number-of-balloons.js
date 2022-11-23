/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const hash = {};

	[...text].map((char) => {
		hash[char] = hash[char] + 1 || 1;
	});

	hash.l = Math.floor(hash.l / 2);
	hash.o = Math.floor(hash.o / 2);

	return Math.min(hash.b, hash.a, hash.l, hash.o, hash.n) || 0;
};