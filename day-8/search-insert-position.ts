var searchInsert = function(nums:number[], target:number) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.round((left + right) / 2);
        if(nums[mid]===target)
            return mid;
        if(nums[mid] < target)
            left =left +1;
        else right = right -1;
    }
    return right + 1;
};


console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))