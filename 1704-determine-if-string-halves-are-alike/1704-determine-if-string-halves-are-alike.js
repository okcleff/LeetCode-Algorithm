/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
  const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
  
  let sum = 0;
  const leng = s.length
  for (let i = 0; i < leng / 2; i++)
    sum += vowels.has(s[i]) - vowels.has(s[leng - 1 - i]);
  return !sum;
};