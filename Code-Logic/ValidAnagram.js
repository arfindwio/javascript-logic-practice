var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char] -= 1;
  }

  return Object.values(charCount).every((count) => count === 0);
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
