/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  const str = s.replace('()', '');
	return str.length === s.length ? str.length : minAddToMakeValid(str);
};