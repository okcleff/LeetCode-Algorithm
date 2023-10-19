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
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;
    
  function sumLeft(root, isLeft){
    if (isLeft && !root.left && !root.right){
      sum += root.val;
    }
    
    if (root.left) sumLeft(root.left, true);
    if (root.right) sumLeft(root.right, false);
        
    return sum;
  }
    
  return sumLeft(root, false);
};