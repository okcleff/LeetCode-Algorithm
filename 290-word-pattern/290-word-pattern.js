/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(p, s) {
  const arrP = p.split('');
  const arrS = s.split(' ');
  if (arrP.length !== arrS.length) return false;

  const obj = (arr1, arr2) => {
    let result = {};
    for (let i = 0; i < arr1.length; i++) {
      result[arr1[i]] = arr2[i];
    }
    return result;
  };

  const doesMatch = (arr1, arr2, obj) => {
    const copied = [...arr1];
    for (let i = 0; i < copied.length; i++) {
      copied[i] = obj[copied[i]];
    }
    return copied.join('') === arr2.join('') ? true : false;
  };

  return (
    doesMatch(arrP, arrS, obj(arrP, arrS)) &&
    doesMatch(arrS, arrP, obj(arrS, arrP))
  );
};