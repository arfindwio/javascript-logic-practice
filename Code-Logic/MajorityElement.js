var majorityElement = function (nums) {
  const object = {};
  const majorityCount = Math.floor(nums.length / 2);

  for (num of nums) {
    object[num] = (object[num] || 0) + 1;

    if (object[num] > majorityCount) {
      return num;
    }
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
