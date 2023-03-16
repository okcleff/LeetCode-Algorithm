/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
	let map = new Map();
	let length = -1;
  
	for (let i = 0; i < s.length; i++) {
		const char = s[i];
    
		if (!map.has(char)) {
			map.set(char, i);
		} else {
			const dist = i - map.get(char) - 1;
			length = Math.max(length, dist);
		}
	}
  
	return length;
};