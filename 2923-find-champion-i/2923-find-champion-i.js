/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  let max = -Infinity;
  let answer;

  grid.forEach((row, i) => {
    let count = 0;
    
    for (let team of row)
      if (team === 1) {
      count++;
    }
    
    if (count > max) {
      max = count;
      answer = i;
    }
  })

  return answer;
};