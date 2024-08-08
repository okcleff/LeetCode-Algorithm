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
// var getMinimumDifference = function(root) {
//   let prev;
//   let answer = Infinity;
  
//   const traverse = (node) => {
//     if (!node) return;
    
//     traverse(node.left);
    
//     if (prev) {
//       answer = Math.min(answer, Math.abs(prev - node.val)); 
//     }
        
//     prev = node.val;
    
//     traverse(node.right);
//   }
  
//   traverse(root);
  
//   return answer;
// };

var getMinimumDifference = function (root) {
  let res = Infinity;
  let prev = undefined;

  const traverse = (node) => {
    if (!node) return;

    traverse(node.left);

    if (prev !== undefined) {
      res = Math.min(res, node.val - prev);
    }
    prev = node.val;

    traverse(node.right);
  };

  traverse(root);

  return res;
};