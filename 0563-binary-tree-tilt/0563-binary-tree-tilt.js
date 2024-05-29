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
var findTilt = function(root) {
  let answer = 0;

  const getSum = (node) => {
    if (!node) return 0;
        
    const left = getSum(node.left);
    const right = getSum(node.right);
        
    answer += Math.abs(left - right);
        
    return left + right + node.val;
  }
  
  getSum(root);
    
  return answer;    
};