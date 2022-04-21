/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let answer = 0;
  accounts.map(arr => {
    answer = Math.max(answer, arr.reduce((a,b) => a+b))
  })
  return answer;
};