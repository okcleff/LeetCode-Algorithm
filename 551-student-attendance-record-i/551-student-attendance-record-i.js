/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absence = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'A') absence++;
    }
    if(absence >= 2) return false;
    if(s.indexOf('LLL') !== -1) return false;
    return true;
};