var addDigits = function (num) {
  if (num.toString().length === 1) return num;

  while (num.toString().length > 1) {
    const array = num.toString().split("");

    num = array.reduce((acc, curr) => acc + parseInt(curr), 0);
  }

  return num;
};

console.log(addDigits(38));
console.log(addDigits(0));
