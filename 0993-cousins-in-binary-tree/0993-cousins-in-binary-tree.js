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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  const traverse = (node, target, depth = 0, parentNode) => {
    if (!node) return null;
    if (node.val === target) return {depth, parentNode};
    
    let left = traverse(node.left, target, depth + 1, node);
    let right = traverse(node.right, target, depth + 1, node);
    
    return left || right;
  }
  
  let {depth: xDepth, parentNode: xParent} = traverse(root, x);
  let {depth: yDepth, parentNode: yParent} = traverse(root, y);
    
  return xDepth === yDepth && xParent !== yParent;
};