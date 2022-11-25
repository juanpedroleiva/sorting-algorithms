module.exports = function generateList(listSize, sorted = false) {
  let nums = new Set();
  while (nums.size !== listSize) {
    nums.add(Math.floor(Math.random() * 100000) + 1);
  }
  nums = Array.from(nums);
  if (sorted) {
    nums.sort(function (a, b) {
      return a - b;
    });
  }
  return nums;
};
