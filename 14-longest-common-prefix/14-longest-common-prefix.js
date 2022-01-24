/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    } else {
        for (let i = 1; i < strs.length; i++) {
            for (let j = 0; j < strs[0].length; j++) {
                if (strs[0][j] !== strs[i][j]) {
                    strs[0] = strs[0].slice(0, j);
                }
            }
        }
        return strs[0];
    }
  
};