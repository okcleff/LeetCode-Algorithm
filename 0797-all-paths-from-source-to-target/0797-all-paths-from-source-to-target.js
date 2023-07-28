/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const answer = [];
  
  function findPaths(current, node, graph, answer) {
    if (node === graph.length - 1) {
      answer.push([...current]);
      return;
    }

    for(let i = 0; i < graph[node].length; i++) {
      current.push(graph[node][i]);
      findPaths(current, graph[node][i], graph, answer);
      current.pop();
    }
  }
  
  findPaths([0], 0, graph, answer);
  
  return answer;
};

