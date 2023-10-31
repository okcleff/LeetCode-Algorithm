/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  const answer = [];
  
  const dfs = (root) => {
    if (!root) return;
    
    if (root) {
      answer.push(root.val);
    }
    
    if (root.left !== null) dfs(root.left);
    if (root.right !== null) dfs(root.right);
  }
  
  dfs(root1);
  dfs(root2);
  
  return answer.sort((a, b) => a - b);
};