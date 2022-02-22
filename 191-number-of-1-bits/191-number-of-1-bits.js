/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return BigInt(n).toString(2).split("0").join('').length;
};