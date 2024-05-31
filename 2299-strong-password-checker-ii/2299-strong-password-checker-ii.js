/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(password) {
  const specialChars = "!@#$%^&*()-+";
  const validators = [
    (s) => s.length >= 8,
    (s) => /[a-z]/.test(s) && /[A-Z]/.test(s),
    (s) => /\d/.test(s),
    (s) => [...specialChars].some((specialChar) => s.includes(specialChar)),
    (s) => ![...s].some((char, idx) => char === s[idx + 1]),
  ];
  
  return validators.every((validator) => validator(password))
};