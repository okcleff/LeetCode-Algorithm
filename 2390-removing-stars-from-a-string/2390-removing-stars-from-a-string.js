/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  const answer = [];
  
  for (let i = 0; i < s.length; i++) {
    if (answer.length === 0) {
      answer.push(s[i]);
    } else if (s[i] === '*') {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }
  
  return answer.join('');
};