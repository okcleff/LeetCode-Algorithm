/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// const bin = (a) => {
//     let result = 0;
//     for (let i = 0; i < a.length; i++) {
//         result = result + parseInt(a[i]) * Math.pow(2, a.length - 1 - i);
//     }
//     return result;
// };

// const big = (a) => {
//     return BigInt(a);
// }

var addBinary = function(a, b) {
    return (BigInt('0b'+a) + BigInt('0b'+b)).toString(2);
};

