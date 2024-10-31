var titleToNumber = (columnTitle) => {
  let number = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    number = number * 26 + charCode;
  }

  return number;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
