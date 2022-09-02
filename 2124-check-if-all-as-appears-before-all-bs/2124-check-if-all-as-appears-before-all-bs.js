/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
	return !s.slice(0, s.lastIndexOf('a') + 1).includes('b');
};