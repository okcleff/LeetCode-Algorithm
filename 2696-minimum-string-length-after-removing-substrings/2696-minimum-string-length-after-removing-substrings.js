/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];

  for (const c of s) {
    if (stack.length && ((c === "B" && stack[stack.length - 1] === "A") || (c === "D" && stack[stack.length - 1] === "C"))) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  
  return stack.length;
};
