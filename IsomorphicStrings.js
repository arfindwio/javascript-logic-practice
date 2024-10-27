var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  const sToTMap = {};
  const tToSMap = {};

  for (let i = 0; i < s.length; i++) {
    if (sToTMap[s[i]] === undefined) {
      sToTMap[s[i]] = t[i];
    } else if (sToTMap[s[i]] !== t[i]) {
      return false;
    }

    if (tToSMap[t[i]] === undefined) {
      tToSMap[t[i]] = s[i];
    } else if (tToSMap[t[i]] !== s[i]) {
      return false;
    }
  }

  return true;
};

console.log(isIsomorphic("egg", "add")); //true
console.log(isIsomorphic("foo", "bar")); //false
console.log(isIsomorphic("paper", "title")); //true
