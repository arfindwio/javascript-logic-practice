var canWinNim = function (n) {
  if (n % 4 === 0) {
    return false;
  }

  return true;
};

console.log(canWinNim(4));
console.log(canWinNim(1));
console.log(canWinNim(2));
console.log(canWinNim(5));
