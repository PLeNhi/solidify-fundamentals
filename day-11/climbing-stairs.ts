var climbStairs = function(n:number): number {
    let memo = new Map<number,number>();

    var bck = function (m: number):number
    {
        if(m === 1) return 1;
        if(m === 2) return 2;
        if(memo.has(m))
        {
            return memo.get(m) as number
        }
        else 
            memo.set(m, bck(m - 1) + bck(m - 2))
        return memo.get(m) as number
    }
    return bck(n)
};

console.log(climbStairs(2))
console.log(climbStairs(20))
console.log(climbStairs(44))