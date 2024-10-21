/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
  let answer = 0;
  let numberOfApples = apple.reduce((acc,curr) => acc + curr, 0);
  
  capacity.sort((a, b) => b - a);
  
  for (let i = 0; i < capacity.length; i++) {
    numberOfApples -= capacity[i];
    answer++;
    
    if (numberOfApples <= 0) break;
  }
  
  return answer;
};