/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let obj1 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = t[i];
  }

  let obj2 = {};
  for (let i = 0; i < t.length; i++) {
    obj2[t[i]] = s[i];
  }

  const checker = (str1, str2, obj) => {
    const arr = str1.split('');
    for (let i = 0; i < str1.length; i++) {
      arr[i] = obj[str1[i]];
    }
    return arr.join('') === str2 ? true : false;
  };

  return checker(s, t, obj1) && checker(t, s, obj2);
};