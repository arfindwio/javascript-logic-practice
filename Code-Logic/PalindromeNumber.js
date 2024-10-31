var isPalindrome = function (x) {
  if (x > 0) {
    const reverseNum = parseInt(x.toString().split("").reverse().join(""));
    if (x === reverseNum) {
      return true;
    } else {
      return false;
    }
  } else if (x === 0) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
