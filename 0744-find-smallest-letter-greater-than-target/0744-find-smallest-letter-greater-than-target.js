/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  const targetIdx = alphabets.indexOf(target);
  
  for (let i = 0; i < letters.length; i++) {
    if (alphabets.indexOf(letters[i]) > targetIdx) return letters[i];
  }
  
  return letters[0];
};