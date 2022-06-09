/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    return [...n.toString()].reduce((a,b) => Number(a)*Number(b)) - [...n.toString()].reduce((a,b) => Number(a)+Number(b))
};