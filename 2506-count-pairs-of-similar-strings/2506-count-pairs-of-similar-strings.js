/**
 * @param {string[]} words
 * @return {number}
 */

const isSimilar = (wordOne, wordTwo) => {
  const set1 = new Set(wordOne);
  const set2 = new Set(wordTwo);
  if (set1.size !== set2.size) {
    return false;
  }

  return [...set1].every((char) => set2.has(char));
};

var similarPairs = function(words) {
  let answer = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isSimilar(words[i], words[j])) {
        answer++;
      }
    }
  }

  return answer;
};