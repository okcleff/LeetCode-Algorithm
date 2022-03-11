/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
  const arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (arr[i].startsWith(dictionary[j])) {
        arr[i] = dictionary[j];
      }
    }
  }
  return arr.join(' ');
};