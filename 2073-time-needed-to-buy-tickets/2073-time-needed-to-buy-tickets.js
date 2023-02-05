/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let answer = 0;
  while (tickets[k]) {
    for (i = 0; i < tickets.length; i++) {
      if (tickets[i] && tickets[k]) {
        answer++;
        tickets[i]--;
      }
    }
  }
  return answer;
};