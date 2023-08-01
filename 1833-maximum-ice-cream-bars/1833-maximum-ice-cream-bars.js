/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
  costs.sort((a, b) => a - b);

  let answer = 0;

  for (let i = 0; i < costs.length; i++) {
    const cost = costs[i];
    
    if (cost <= coins) {
      coins -= cost;
      answer++;
    }
  }

  return answer;
};