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
var sumEvenGrandparent = function(root, grandpaEven = false, fatherEven = false) {
  if (!root) return 0;
  const isEven = root.val % 2 === 0;
  const left = sumEvenGrandparent(root.left, fatherEven, isEven);
  const right = sumEvenGrandparent(root.right, fatherEven, isEven);
  return left + right + (grandpaEven ? root.val : 0);
};