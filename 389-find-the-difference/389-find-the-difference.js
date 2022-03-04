/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const hash = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
      obj[str[i]] ? (obj[str[i]] = obj[str[i]] + 1) : (obj[str[i]] = 1);
    }
    return obj;
  };
  for (let key in hash(t)) {
    if (hash(s)[key] !== hash(t)[key]) return key;
  }
};