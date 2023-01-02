/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let newNum = 0; arrayNum = [];
    
    for (let i = 0; i < nums.length; i++){
        newNum += nums[i]
        arrayNum.push(newNum)
    }
    return arrayNum
};

const nums = [1,2,3,4];
console.log(runningSum(nums))