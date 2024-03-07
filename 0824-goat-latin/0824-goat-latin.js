/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
  const vowels = 'aeiouAEIOU';
  const arr = sentence.split(' ');
    
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    const firstChar = word[0];

    if(!vowels.includes(firstChar)) {
      word = word.slice(1) + firstChar;
    }
        
    word += 'ma';
    
    word += 'a'.repeat(i + 1);
        
    arr[i] = word;
  }
    
  return arr.join(' ');
};