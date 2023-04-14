/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
	const leng = temperatures.length;
	const answer = [];
  
	for (let i = 0; i < leng; i++) {
		let days = 0;
    
		for (let j = i + 1; j < leng; j++) {
			if (temperatures[i] < temperatures[j]) {
				days = j - i;
				answer.push(days);
				break;
			}
		}
    
		if (!days) answer.push(0);
	}
  
	return answer;
};