/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let answer = [...words[0]];
  for (let i = 1; i < words.length; i++) {
    answer = answer.filter(c => {
      const leng = words[i].length;
      words[i] = words[i].replace(c, "");
      return leng > words[i].length;
    });
  }
  return answer;
};