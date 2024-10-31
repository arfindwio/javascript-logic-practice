var fib = function (n) {
  const result = [0, 1];

  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
  } else {
    return result[n];
  }
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
