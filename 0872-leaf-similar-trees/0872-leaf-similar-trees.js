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
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const traverse = (node, leaves) => {
    if (!node) return;
      
    if (!node.left && !node.right) leaves.push(node.val);
      
    traverse(node.left, leaves);
    traverse(node.right, leaves);
  }
    
  const leaves1 = [];
  traverse(root1, leaves1);
  const leaves2 = [];  
  traverse(root2, leaves2);
  
  return leaves1.toString() === leaves2.toString();
};