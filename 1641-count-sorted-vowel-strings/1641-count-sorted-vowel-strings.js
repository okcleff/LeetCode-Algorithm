/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  const str = 'aeiou';
  let answer = 0;

  function backtrack(i, arr) {
    if (arr.length === n) {
      answer++;
      return;
    }

    for (let j = i; j < str.length; j++) {
      arr.push(j);
      backtrack(j, arr);
      arr.pop();
    }
  }

  backtrack(0, []);
  return answer;
};