/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const stack = [''];

  for (let char of s) {
    let top = stack[stack.length - 1];
    top.toLowerCase() === char.toLowerCase() && top !== char
      ? stack.pop()
      : stack.push(char);
  }

  return stack.join('');
};