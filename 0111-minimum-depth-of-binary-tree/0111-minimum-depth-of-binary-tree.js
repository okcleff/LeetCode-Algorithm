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
 * @return {number}
 */
var minDepth = function(root) {
  if (root == null) return 0;
    
  let min = Infinity;
  
  const dfs = (node, depth) => {
    if (node == null) return 0;
        
    if (node.left == null && node.right == null) {
      return min = Math.min(min, depth);
    }
        
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }
    
  dfs(root, 1);
    
  return min;  
};