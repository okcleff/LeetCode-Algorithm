/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    if(s.indexOf('LLL') !== -1) return false;
    
    let absence = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'A') absence++;
    }
    
    return absence >= 2 ? false: true;
};