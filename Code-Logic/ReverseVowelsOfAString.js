var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const index = [];
  const array = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      array.push(s[i]);
      index.push(i);
    }
  }

  array.reverse();

  for (let j = 0; j < index.length; j++) {
    s[index[j]] = array[j];
  }

  return s.join("");
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
