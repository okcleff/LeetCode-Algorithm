/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
  let map = new Map();
  let answer = 1;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      answer++;
      map.clear();
    }
    map.set(s[i], 1);
  }

  return answer;
};