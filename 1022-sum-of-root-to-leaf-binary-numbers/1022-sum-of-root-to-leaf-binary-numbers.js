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
var sumRootToLeaf = function(root) {
  const binaries = [];
  const traverse = (node, str) => {
    if (node === null) {
      return;
    }
    // compose the binary string for the next node
    const binary = `${str}${node.val}`;
    // when visiting a leaf, add binary string to the array
    if (node.left === null && node.right === null) {
      binaries.push(binary);
    }

    traverse(node.left, binary);
    traverse(node.right, binary);
  };

  traverse(root, '');

  return binaries.reduce((sum, binary) => {
    sum += parseInt(binary, 2);
    return sum;
  }, 0);
};