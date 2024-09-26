/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  const hexadecimalChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
  if (num == 0) return "0";
    
  if (num < 0) {
    num += Math.pow(2,32);
  }

  let answer = "";
    
  while (num > 0) {
    const digit = num % 16;
    answer = hexadecimalChars[digit] + answer;
    num = Math.floor(num / 16);
  }

  return answer;
};