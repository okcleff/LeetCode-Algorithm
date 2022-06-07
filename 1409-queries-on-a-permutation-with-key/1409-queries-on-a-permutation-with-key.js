/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  let p = [];
  for (let i = 1; i <= m; i++) {
    p.push(i);
  }

  const answer = [];
  queries.map((num) => {
    answer.push(p.indexOf(num));
    p = p.filter((n) => n !== num);
    p.unshift(num);
  });

  return answer;
};