var isHappy = function (n) {
  let seen = new Set();

  while (n !== 1) {
    if (seen.has(n)) {
      return false;
    }

    seen.add(n);

    n = n
      .toString()
      .split("")
      .reduce((acc, curr) => acc + Math.pow(parseInt(curr), 2), 0);
  }

  return true;
};

console.log(isHappy(19));
console.log(isHappy(2));
