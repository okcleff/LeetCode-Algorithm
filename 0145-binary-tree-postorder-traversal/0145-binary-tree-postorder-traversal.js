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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const answer = [];
  
  const traversal = (node) => {
    if (!node) return;
    
    traversal(node.left);
    traversal(node.right);
    
    answer.push(node.val);
  }
  
  traversal(root);
  
  return answer;
};