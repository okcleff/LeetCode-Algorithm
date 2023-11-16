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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  
  return dfs(root.left, root.right);
};

function dfs(l, r){
  if (!l && !r) return true;
  if (!l || !r) return false;
  if (l.val !== r.val) return false;
  
  return dfs(l.left, r.right) && dfs(l.right, r.left);
}