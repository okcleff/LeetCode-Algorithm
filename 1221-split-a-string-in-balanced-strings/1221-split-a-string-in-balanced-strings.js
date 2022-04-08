/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0,
        balance = 0;
    for(let i = 0; i < s.length; i++){
        s[i] === 'R' ? balance++ : balance--;
        if(balance === 0) count++;
    }
    return count;
};