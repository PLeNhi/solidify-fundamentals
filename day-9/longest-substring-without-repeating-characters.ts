var lengthOfLongestSubstring = function(s:string) {
    let left = 0;
    let right = 0;
    let maxLenght = 0;
    const duplicateString = new Set()

    while (right < s.length) {
        if(duplicateString.has(s[right]))
        {
            while (duplicateString.has(s[right])) {
                duplicateString.delete(s[left])
                left++
            }
           
        }
        duplicateString.add(s[right])
        maxLenght = Math.max(maxLenght, duplicateString.size);
        right ++;
    }
    return maxLenght;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
