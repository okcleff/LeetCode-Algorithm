/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let totalSum = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let position = i + 1;
        let reversedValue = 26 - (char.charCodeAt(0) - 'a'.charCodeAt(0));
        totalSum += position * reversedValue;
    }

    return totalSum;
};