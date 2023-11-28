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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const answer = [];
    
  const dfs = (node, path) => {
    if (!node) return;
 
    if (!node.left && !node.right) {
      return answer.push(path + node.val);
    }
    
    dfs(node.left, path + node.val + "->");
    dfs(node.right, path + node.val + "->");
  }
  
  dfs(root, "");
  return answer;
};