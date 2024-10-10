var reverse = function (x) {
  if (typeof x !== "number") {
    return 0;
  }

  const reverseNumber1 = parseInt(x.toString().split("").reverse().join(""));
  let reverseNumber2 = x > 0 ? reverseNumber1 : -reverseNumber1;

  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  if (reverseNumber2 < INT_MIN || reverseNumber2 > INT_MAX) {
    return 0;
  }

  return reverseNumber2;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
