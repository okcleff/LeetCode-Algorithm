/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
    let maxResult = '0';
    
    // 문자열의 각 위치에서 digit을 찾아 제거해보고 최대값 찾기
    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            // 현재 위치의 숫자를 제거한 새로운 문자열 생성
            let newNum = number.slice(0, i) + number.slice(i + 1);
            
            // 현재까지의 최대값과 비교
            if (newNum > maxResult) {
                maxResult = newNum;
            }
        }
    }
    
    return maxResult;
};