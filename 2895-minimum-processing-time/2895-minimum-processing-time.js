/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
  processorTime.sort((a, b) => a - b);
  tasks.sort((a, b) => b - a);
  
  let answer = 0;
  
  for (let i = 0; i < processorTime.length; i++) {
    for (let j = i * 4; j < (i + 1) * 4; j++) {
      answer = Math.max(processorTime[i] + tasks[j], answer);
    }
  }
  
  return answer;
};