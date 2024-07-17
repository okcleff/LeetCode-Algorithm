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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function(root, k) {
  const levels = {};
  
  const levelSum = (node, currentLevel) => {
    levels[currentLevel] ? (levels[currentLevel] += node.val) : (levels[currentLevel] = node.val);
    
    node.left && levelSum(node.left, currentLevel + 1);
    node.right && levelSum(node.right, currentLevel + 1); 
  }
  
  levelSum(root, 0);
  
  return Object.values(levels).sort((a, b) => b - a)[k - 1] || -1;
};