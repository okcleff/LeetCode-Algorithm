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
var findBottomLeftValue = function(root) {
  let depth = 0;
  let answer = root.val;
  
  const traverse = (node, level) => {
    if (!node) return;
    
    if (!node.left && level > depth) {
      depth = level;
      answer = node.val; 
    }
    
    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }
  
  traverse(root, depth);
  return answer;
};