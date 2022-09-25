/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  const arr = title.split(' ');
  const capitalized = arr.map((word) => {
    if (word.length <= 2) return word.toLowerCase();

    const firstLetter = word.slice(0, 1).toUpperCase();
    const remainingLetter = word.slice(1).toLowerCase();
    return firstLetter + remainingLetter;
  });

  return capitalized.join(' ');
};