/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n;
    while(left <= right) {
        let mid = Math.trunc((left + right) / 2);
        const check = guess(mid);
        if(!check) return mid;
        if(check < 0) right = mid - 1;
        else left = mid + 1;
    }
    return left
};