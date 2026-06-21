//// Two Pointers with Two Sum
var twoSum = function(nums: number[], target: number) {
    const sortedNums = [...nums].sort((a, b) => a - b);
    let pointer_left = sortedNums.length -1 
    let pointer_right = 0;
    for(let i = 0; i < sortedNums.length; ++i)
    {
        const sum = sortedNums[pointer_left] + sortedNums[pointer_right];
        if(sum === target)
        {
            return [pointer_right, pointer_left];
        }
        if(sum > target)
        {
            pointer_left--;
        }
        else if(sum < target)
        {
            pointer_right++;
        }
       
    }

    return [];
};

const [pointer_right, pointer_left] = twoSum([-1,-2,-3,-4,-5], -8)

console.log(pointer_right, pointer_left)


// Hash Map with Two Sum => Để tạo ra target thì mình còn thiếu bao nhiêu?
var twoSumHashMap = function(nums: number[], target: number) {
    const hashMap = new Map<number, number>();
    for(let i = 0; i < nums.length; ++i)
    {
        const complement = target - nums[i];
        if(hashMap.has(complement))
        {
            return [hashMap.get(complement)!, i];
        }
        hashMap.set(nums[i], i);
    }
    return [];
};

const [pointer_right_hash, pointer_left_hash] = twoSumHashMap([3,2,4], 6)

console.log(pointer_right_hash, pointer_left_hash)