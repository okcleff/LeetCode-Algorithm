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
var averageOfSubtree = function(root) {
  let answer = 0;
  
  const dfs = (node) => {
    if (!node) return [0, 0];
    
    const [leftSum, leftCount] = dfs(node.left);
    const [rightSum, rightCount] = dfs(node.right);

    const sum = leftSum + rightSum + node.val;
    const count = leftCount + rightCount + 1;
    
    if (Math.floor(sum / count) === node.val) answer++;
    
    return [sum, count];
  }

  dfs(root);

  return answer;
};