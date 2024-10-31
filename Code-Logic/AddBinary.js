var addBinary = function (a, b) {
  let result = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;

    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);

    i--;
    j--;
  }

  return result;
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
console.log(addBinary("1111", "1111"));
