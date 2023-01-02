/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let total = 0;
    let sum = 0;
  
    for (const val of nums) {
      total += val;
    }
  
    for (const i in nums) {
      if (total - sum - nums[i] === sum) {
        return i;
      }
      sum += nums[i];
    }
    return -1;
  };