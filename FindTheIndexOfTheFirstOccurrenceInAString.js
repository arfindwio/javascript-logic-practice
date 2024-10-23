const strStr = (haystack, needle) => {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

console.log(strStr("sadbutsad", "sad")); // output: 0 (index nya 0)
console.log(strStr("leetcode", "leeto")); // output: -1 (indexnya tidak ditemukan)
console.log(strStr("hello", "ll")); // output: 2 (indexnya 2)
