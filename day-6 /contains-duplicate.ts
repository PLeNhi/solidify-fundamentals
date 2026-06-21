/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums:number[]) {
    const newNums = new Set()
    for (const element of nums) {
        if(newNums.has(element))
            return true;
        newNums.add(element)
    }
    return false
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,5,-2,-4,0]))