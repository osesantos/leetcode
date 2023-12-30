/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const lineSplit = s.trim().split(' ');
  return lineSplit[lineSplit.length-1].split('').length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
