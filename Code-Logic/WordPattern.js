var wordPattern = function (pattern, s) {
  pattern = pattern.split("");
  s = s.split(" ");
  let obj = {};
  let i = 0;
  if (pattern.length !== s.length) return false;
  for (let letter of pattern) {
    if (obj[letter]) {
      if (obj[letter] !== s[i]) {
        return false;
      }
    } else {
      if (!Object.values(obj).includes(s[i])) {
        obj[letter] = s[i];
      } else {
        return false;
      }
    }
    i++;
  }
  return true;
};

console.log(wordPattern("abba", "dog constructor constructor dog"));
console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
