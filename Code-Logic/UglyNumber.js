var isUgly = function (n) {
  while (n > 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else if (n % 3 === 0) {
      n = n / 3;
    } else if (n % 5 === 0) {
      n = n / 5;
    } else if (n === 1) {
      return true;
    } else {
      return false;
    }
  }

  return false;
};

console.log(isUgly(6));
console.log(isUgly(1));
console.log(isUgly(14));
