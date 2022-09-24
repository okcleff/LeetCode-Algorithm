/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const arr = sentence.split(' ');

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].startsWith(searchWord)) return i + 1;
  }
  return -1;
};