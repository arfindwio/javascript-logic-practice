var countBits = function (n) {
  const array = [];

  for (let i = 0; i <= n; i++) {
    const biner = i.toString(2).split("");
    const sum = biner.reduce((acc, curr) => acc + parseInt(curr), 0);

    array.push(sum);
  }

  return array;
};

console.log(countBits(2));
console.log(countBits(5));
