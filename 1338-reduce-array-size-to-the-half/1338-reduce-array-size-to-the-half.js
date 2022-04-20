/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  const dict = {};
  arr.map((num) => (dict[num] = (dict[num] || 0) + 1));

  const half = arr.length / 2
  let set = 0;
  const freq = Object.values(dict).sort((a, b) => a - b);
  let sum = freq.reduce((a, b) => a + b);
  
  while (sum > half) {
    sum -= freq.pop();
    set++;
  }
  
  return set;
};