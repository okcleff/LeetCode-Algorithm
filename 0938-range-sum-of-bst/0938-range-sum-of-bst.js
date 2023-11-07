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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let answer = 0;
  
  function dfs(node) {
    if (!node) {
      return;
    }
    
    if (node.val < low) {
      dfs(node.right);
      return;
    }
    
    if (node.val > high) {
      dfs(node.left);
      return;
    }

    answer += node.val;
    dfs(node.left);
    dfs(node.right);
  }


  dfs(root);
  return answer;
};