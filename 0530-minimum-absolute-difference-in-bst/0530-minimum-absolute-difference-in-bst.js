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
var getMinimumDifference = function(root) {
  let answer = Infinity;
  let prev = undefined;
  
  const traverse = (node) => {
    if (!node) return;
    
    traverse(node.left);
    
    if (prev !== undefined) {
      answer = Math.min(answer, node.val - prev); 
    }
        
    prev = node.val;
    
    traverse(node.right);
  }
  
  traverse(root);
  
  return answer;
};

// var getMinimumDifference = function (root) {
//   let res = Infinity;
//   let prev = undefined;

//   const traverse = (node) => {
//     if (!node) return;

//     traverse(node.left);

//     if (prev !== undefined) {
//       res = Math.min(res, node.val - prev);
//     }
//     prev = node.val;

//     traverse(node.right);
//   };

//   traverse(root);

//   return res;
// };