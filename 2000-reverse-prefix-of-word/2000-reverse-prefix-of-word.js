/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  const idx = word.indexOf(ch);
  if (idx === -1) return word;
  const prefix = word.slice(0, idx + 1);
  const reverse = [...prefix].reverse().join('');
  return reverse + word.slice(idx + 1);
};