/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 1) return strs[0]; 
  let answer = '';
  for (let i = 1; i <= strs[0].length; i++) {
    let prefix = strs[0].slice(0, i);
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) prefix = answer;
    }
    answer = prefix;
  }
  return answer;
};