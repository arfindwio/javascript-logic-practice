var summaryRanges = function (nums) {
  const ranges = [];
  let start = 0;

  for (let i = 1; i <= nums.length; i++) {
    if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
      if (start === i - 1) {
        ranges.push(`${nums[start]}`);
      } else {
        ranges.push(`${nums[start]}->${nums[i - 1]}`);
      }
      start = i;
    }
  }

  return ranges;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
