var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
};

const nums1 = [3, 0, 1];
const nums2 = [0, 1];
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];

console.log(nums1);
console.log(nums2);
console.log(nums3);
