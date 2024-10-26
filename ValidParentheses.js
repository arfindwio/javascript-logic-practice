var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const pairs = { "(": ")", "{": "}", "[": "]" };

  let stack = [];
  for (const char of sorted) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      const topElement = stack.pop();
      if (pairs[topElement] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("(})"));
console.log(isValid("({})"));
console.log(isValid("([)]"));
