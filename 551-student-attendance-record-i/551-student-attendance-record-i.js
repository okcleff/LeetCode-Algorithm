/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absence = 0;
    for(let i = 0; i < s.length; i++){
        s[i] === 'A' ? absence++ : null;
        if(s[i] === 'L' && s[i+1] === 'L' && s[i+2] === 'L') return false;
    }
    if(absence >= 2) return false;
    return true;
};