var isPowerOfFour = function (n) {
  if (n < 1) return false;

  const result = Math.ceil(Math.log(n) / Math.log(4));

  for (let i = result - 2; i < result + 2; i++) {
    const pow = Math.pow(4, i);

    if (pow === n) {
      return true;
    }
  }

  return false;
};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(1));
