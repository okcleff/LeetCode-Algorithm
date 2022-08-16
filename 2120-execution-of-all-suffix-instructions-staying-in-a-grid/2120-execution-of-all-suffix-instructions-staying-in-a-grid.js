/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
 const handleRobot = (pos, move) => {
    move === 'R'
      ? pos[1]++
      : move === 'L'
      ? pos[1]--
      : move === 'U'
      ? pos[0]--
      : pos[0]++;
    return pos;
  };

  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    let pos = [...startPos];
    for (let j = i; j < s.length; j++) {
      handleRobot(pos, s[j]);
      if (pos[0] < n && pos[0] >= 0 && pos[1] < n && pos[1] >= 0) {
        count++;
      } else {
        break;
      }
    }
    answer.push(count);
  }
  return answer;
};