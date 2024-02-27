/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (!nums.length) {
    return null;
  }

  const max = Math.max(...nums);
  let root = new TreeNode(max);
  const rootIndex = nums.findIndex(num => num === max);
  root.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
  root.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1, nums.length));
  
  return root;
};