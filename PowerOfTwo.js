var isPowerOfTwo = function (n) {
  for (let i = 0; i < n; i++) {
    const pow = Math.pow(2, i);

    if (pow === n) {
      return true;
    } else if (pow > n) {
      return false;
    }
  }

  return false;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(3));
