/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return [];
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  if (digits.length === 1) return map[digits];

  const recursive = (idx = 0, current = '', result = []) => {
    if (idx === digits.length) {
      result.push(current);
      return;
    }
    map[digits[idx]].map((char) => {
      recursive(idx + 1, current + char, result);
    });
    return result;
  };
  return recursive();
};