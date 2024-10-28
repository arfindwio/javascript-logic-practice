var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }

  for (let i = k; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);
moveZeroes([0, 0, 1]);
