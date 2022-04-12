/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let answer = 0;
    operations.map(el => el.indexOf('+') !== -1 ? answer++ : answer--)
    return answer;
};