
// given an array of numbers, return the max value

// how to mention type for array - :number[]

function getMax(nums: number[]) {

    if(nums.length === 0)  throw new Error("Array is empty");

    let maxValue = nums[0];

    for(let i = 0; i<nums.length; i++){
        if(nums[i]! > maxValue!){
            maxValue = nums[i];
        }
    }
    return maxValue;
}

const ans = getMax([2, 34, 45, 1, 23, 67, 233]);

// console.log(ans);

