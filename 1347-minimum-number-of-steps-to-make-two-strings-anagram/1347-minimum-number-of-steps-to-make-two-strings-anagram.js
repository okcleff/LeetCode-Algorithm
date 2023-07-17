/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let dict = {};
  
  for (let char of s) {
    dict[char] = dict[char] + 1 || 1;
  };
  
  let answer = 0;
  
  for (let char of t) {
    if (dict[char]) {
      dict[char]--;
      continue;
    }
      answer++;
    }
  
  return answer;
};