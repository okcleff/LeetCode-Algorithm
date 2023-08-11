/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const vowels = [];
  const indexes = [];
  const set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arr = s.split('');

  for (let i = 0; i < s.length; ++i) {
    if (set.has(s[i])) {
      vowels.push(s[i]);
      indexes.push(i);
    }
  }

  vowels.sort((a, b) => a.charCodeAt() - b.charCodeAt());

  for (let i = 0; i < indexes.length; ++i) {
    arr[indexes[i]] = vowels[i];
  }

  return arr.join('');
};