/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const dict = {};
  for (let char of s) {
    dict[char] = (dict[char] || 0) + 1;
  }
  let odds = 0;
  for (let char in dict) {
    odds += dict[char] % 2;
  }
  return odds ? s.length - odds + 1 : s.length;
};