var removeElement = (nums, val) => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const result = removeElement(nums, 2);
console.log(result);
console.log(nums.slice(0, result));
