const apiRequest = (baseUrl: string) => (endpoint: string) => console.log(`${baseUrl}${endpoint}`);

const productionCall = apiRequest('https://production.com');
const localCall = apiRequest('http://localhost:3000');

productionCall('/users');
localCall('/products');


const formatCurrency = (language: string) => (currency: string) => {
    return new Intl.NumberFormat(language, {
        style: 'currency',
        currency: currency,
    }).format(100000);
}

const formatUSD = formatCurrency('en-US');
const formatVND = formatCurrency('vi-VN');

console.log(formatUSD('USD')); // Output: $100,000.00
console.log(formatVND('VND')); // Output: 100.000 ₫


console.log("=======================Curry()=======================");
function curry(fn: Function) {
    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...nextArgs: any[]) => curried(...args, ...nextArgs);
    };
}

const add = (a: number, b: number, c: number) => a + b + c;
const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6