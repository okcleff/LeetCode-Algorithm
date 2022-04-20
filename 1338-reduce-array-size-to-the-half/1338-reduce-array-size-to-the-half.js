/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  let dict = {};
  arr.map((num) => (dict[num] = (dict[num] || 0) + 1));

  let size = arr.length;
  let set = 0;
  const freq = Object.values(dict).sort((a, b) => a - b);
  let sum = freq.reduce((a, b) => a + b);
  while (sum > arr.length / 2) {
    sum -= freq.pop();
    set++;
  }
  return set;
};