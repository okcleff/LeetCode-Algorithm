/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }

  let uniq = [];
  for (let key in obj) {
    if (obj[key] === 1) uniq.push(s.indexOf(key));
  }

  return uniq.length === 0 ? -1 : uniq.sort((a, b) => a - b)[0];
};