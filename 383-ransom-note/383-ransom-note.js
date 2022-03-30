/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const dict = (str) => {
    let obj = {};
    for (let char of str) {
      obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
  };
  const r = dict(ransomNote);
  const m = dict(magazine);

  for (let char in r) {
    if (!m[char]) return false;
    if (r[char] > m[char]) return false;
  }
  return true;
};