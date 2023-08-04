/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const answer = {};

  for (let obj of arr1) {
    answer[obj.id] = obj;
  }

  for (let obj of arr2) {
    if (answer[obj.id]) {
      for (let key in obj) {
        answer[obj.id][key] = obj[key];
      }
    } else {
      answer[obj.id] = obj;
    }
  }

  return Object.values(answer);
};