/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    const arr = [];
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            const result = number.slice(0, i) + number.slice(i + 1);
            arr.push(result);
        }
    }
    
    // 문자열 비교로 정렬
    return arr.sort((a, b) => b.localeCompare(a))[0];
};