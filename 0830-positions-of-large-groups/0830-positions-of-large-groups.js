/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  const answer = [];
  let start = 0;
  let curr = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== curr) {
      if (i - start > 2) answer.push([start, i - 1]);
      start = i;
      curr = s[i];
    } else {
      if (i === s.length - 1 && i - start >= 2) answer.push([start, i]);
    }
  }

  return answer;
};