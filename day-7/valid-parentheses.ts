
var getOpeningBracket = (closingChar:string)=> {
    const code = closingChar.charCodeAt(0);
    
    const openingCode = (closingChar === ')') ? code - 1 : code - 2;
    
    return String.fromCharCode(openingCode);
}

var isValid = function(s:string) {
    if(s.length %2 !== 0 ) return false;

    let stack = [];
    for (let index = 0; index < s.length; index++) {
        const char = s[index]
        if(char === '(' || char === "[" || char === "{")
             stack.push(char)
        else {
            if (stack.length === 0) return false;

            const topChar = stack.pop();
            
            if (topChar !== getOpeningBracket(char)) {
                return false;
            }
        }
        
    }
    if(!stack.length) return true;
    return false
};

console.log("Case 1 `()`:  ", isValid('()'))
console.log("Case 2 `()[]{}`:  ", isValid('()[]{}'))
console.log("Case 3 `(]`:  ", isValid('(]'))
console.log("Case 4 `([)]`:  ", isValid('([)]'))
console.log("Case 5 `()]`:  ", isValid('()]'))
console.log("Case 5 `[()]`:  ", isValid('[()]'))

console.log("================== Bestter isValidBetter ==================")

//// Bestter 
var isValidBetter = function(s:string) {
    const stack = []
    const pairs: Record<string, string> = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    for (const char of s) {
        if(char === '(' || char === "[" || char === "{")
            stack.push(char)
        else if(!stack.length && stack.pop() !== pairs[char])
            return false
    }
    return stack.length === 0;
};

console.log("Case 1 `()`:  ", isValidBetter('()'))
console.log("Case 2 `()[]{}`:  ", isValidBetter('()[]{}'))
console.log("Case 3 `(]`:  ", isValidBetter('(]'))
console.log("Case 4 `([)]`:  ", isValidBetter('([)]'))
console.log("Case 5 `()]`:  ", isValidBetter('()]'))
console.log("Case 5 `[()]`:  ", isValidBetter('[()]'))