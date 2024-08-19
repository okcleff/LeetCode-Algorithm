/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
  let answer = "";
  
  for (let i = 0; i < s.length; i++) {
    const targetIdx = (i + k) % s.length;
    answer = answer + s[targetIdx];
  }
  
  return answer;
};