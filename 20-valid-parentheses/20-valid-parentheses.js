/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const left = [];
  const p = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      left.push(s[i]);    
    } else if (p[left.pop()] !== s[i]) {
      return false;
    }
  }
  return left.length ? 0 : 1;
};
