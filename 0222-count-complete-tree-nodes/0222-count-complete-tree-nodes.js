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
var countNodes = function(root) {
  if (!root) return 0;
  
  let leftLevel = 0, rightLevel = 0;
  let left = root, right = root;
  
  while (left) {
    leftLevel++;
    left = left.left;
  }
  
  while (right) {
    rightLevel++;
    right = right.right;
  }
  
  if (leftLevel === rightLevel) return Math.pow(2, leftLevel) - 1;
  
  return countNodes(root.left) + countNodes(root.right) + 1;
};