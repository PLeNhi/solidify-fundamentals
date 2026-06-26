var maximumSizeSubarrayEqualsK  = function (array: number[], k:number){
    let maxSum = 0;
    let currentSum = 0;
    for (let index = 0; index < k; index++) {
        currentSum += array[index];
    }
    maxSum = currentSum;

    for (let index = k; index < array.length; index++) {
        currentSum = currentSum + array[index] - array[index - k]
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum;
}

console.log(maximumSizeSubarrayEqualsK([2, 1, 5, 1, 3, 2], 3));