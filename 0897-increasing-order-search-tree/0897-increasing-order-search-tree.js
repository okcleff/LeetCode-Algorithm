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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let arr = [];
  const getTree = (root) => {
    if (!root) return;
    if (root.left) getTree(root.left);
    arr.push(root.val);
    if (root.right) getTree(root.right);
  };

  getTree(root);

  const buildTree = (arr) => {
    if (arr.length === 0) return null;
    let tree = new TreeNode();
    tree.val = arr.shift();
    tree.right = buildTree(arr);
    return tree;
  };

  return buildTree(arr);
};