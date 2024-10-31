var isPalindrome = function (s) {
  const lowerString = s.toLowerCase();
  const cleanString = lowerString.replace(/[^a-z0-9]/gi, "");

  let result = "";
  for (let i = cleanString.length - 1; i >= 0; i--) {
    result += cleanString[i];
  }

  if (result !== cleanString) return false;

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
