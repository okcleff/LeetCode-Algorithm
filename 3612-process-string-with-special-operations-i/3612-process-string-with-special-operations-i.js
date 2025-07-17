/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {
  let result = [];

  const processor = ["*", "#", "%"];

  for (let i = 0; i < s.length; i++) {
    if (!processor.includes(s[i])) {
      result.push(s[i]);
    }

    if (s[i] === '#') {
      result = result.concat(...result);
    }

    if (s[i] === "*") {
      result.pop();
    }

    if (s[i] === "%") {
      result.reverse();
    }
  }

  return result.join("");
};