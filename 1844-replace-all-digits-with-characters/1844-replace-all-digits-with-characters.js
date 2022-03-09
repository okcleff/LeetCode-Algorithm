/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
	for (let i = 0; i < s.length; i+=2) {
        let shift = String.fromCharCode(s[i].charCodeAt() + Number(s[i+1]));
        s = s.replace(s[i+1], shift);
	}
    return s;
};