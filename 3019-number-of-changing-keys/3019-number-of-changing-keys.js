/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
  const lowerCase = s.toLowerCase();
  let answer = 0;
  for (let i = 0; i < lowerCase.length - 1; i++) {
    if (lowerCase[i] !== lowerCase[i+1]) answer++;
  }
  return answer;
};