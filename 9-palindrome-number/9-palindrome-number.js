/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x.length === 1) {
        return true;
    } else {
        const reversed = x.toString().split('').reverse().join('');
        return x.toString() === reversed ? true : false;
    }
};