/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let answer = 0;
    const leng = arr.length;
    for(let i = 0; i< leng; ++i) {
        answer += parseInt(((i + 1) * (leng - i) + 1) / 2) * arr[i];
    }
    return answer;
};