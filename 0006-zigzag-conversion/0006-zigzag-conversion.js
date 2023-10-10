/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const answer = [];
  let step = 1;
  let index = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (!answer[index]) {
      answer[index] = '';
    }
    
    answer[index] += s[i];

    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    
    index += step;
  }
  
  return answer.join('');
};