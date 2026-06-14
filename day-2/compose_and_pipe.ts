const compose = (...fns: Function[]) => (x: any) => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns: Function[]) => (x: any) => fns.reduce((acc, fn) => fn(acc), x);

const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
console.log(compose(double, add1)(6)); // 14
console.log(pipe(double, add1)(6)); // 13