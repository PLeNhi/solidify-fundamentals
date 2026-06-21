var isAnagram = function(s:string, t:string) {
    if(s.length !== t.length) return false;

    const compareMap = new Map();
    for (let index = 0; index < s.length; index++) {
        const current_s = compareMap.get(s[index]) ?? 0;
        compareMap.set(s[index], current_s + 1)
    }
    for (let index = 0; index < t.length; index++) {
        const current_t = compareMap.get(t[index]) ?? 0;
        if(current_t <= 0) return false;
        compareMap.set(t[index], current_t - 1)
    }
    return true
};
console.log(isAnagram("rat", "car"))


//// Best way
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramBestter = function(s:string, t:string) {
    return frequencyCount(s) === frequencyCount(t) ? true : false;
};

// count frequency function 
var frequencyCount = function(s:string){
    // create an array of 26 zeros

    const count = new Array(26).fill(0);

    for(let i =0; i< s.length; i++){
        count[s.charCodeAt(i) - 97]++;
    }

    return count.join("#");
} 