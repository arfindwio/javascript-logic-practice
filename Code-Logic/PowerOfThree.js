var isPowerOfThree = function (n) {
  if (n < 1) return false;

  const result = Math.ceil(Math.log(n) / Math.log(3));

  for (let i = result - 1; i <= result + 1; i++) {
    const pow = Math.pow(3, i);
    if (pow === n) {
      return true;
    }
  }

  return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));
