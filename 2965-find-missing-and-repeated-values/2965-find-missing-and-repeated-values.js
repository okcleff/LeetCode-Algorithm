/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
  let a, b;
  const map = new Map();
  const flat = grid.flat();
  
  flat.forEach(num => {
    if (map.has(num)) a = num;
    map.set(num, true);
  });
  
  for (let i = 1; i <= grid.length ** 2; i++) {
    if (!map.has(i)) b = i;
  }
  
  return [a, b];
};