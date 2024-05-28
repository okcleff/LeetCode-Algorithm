/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  const map = new Map();
  
  const dfs = (node) => {
    if (!node) return;
    
    map.set(node.val, map.get(node.val) ? map.get(node.val) + 1 : 1);
    
    if(node.left) dfs(node.left);
    if(node.right) dfs(node.right);
  }
    
  dfs(root);
  
  const max = Math.max(...map.values());
  
  const answer = [];
  
  for (let key of map.keys()) {
    if (map.get(key) === max) answer.push(key)
  }
  
  return answer;
};