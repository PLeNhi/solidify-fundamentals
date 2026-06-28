function subsets(nums:number[]){
  const result: number[][] = [];

  function backtrack(index:number, currentSubset:number[]) {
    if (index === nums.length) {
      result.push([...currentSubset]); 
      return;
    }

    currentSubset.push(nums[index]);
    backtrack(index + 1, currentSubset);

    currentSubset.pop();

    backtrack(index + 1, currentSubset);
  }

  backtrack(0, []);
  return result;
}
