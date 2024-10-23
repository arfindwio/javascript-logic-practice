/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const split = s.split(" ");
  const filter = split.filter((a) => a !== "");

  return filter[filter.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
