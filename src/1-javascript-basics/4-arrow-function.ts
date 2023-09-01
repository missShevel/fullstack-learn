
const a: number = 2;
const b: number = 3;

let sum1 = (a: number, b: number): number => {
    const result = Math.pow(a, 2) + Math.pow(b, 2);
    console.log(`${a}^2 + ${b}^2 = ${result}`);
    return result;
};

let sum2 = (a: number, b: number): string => `${a}^2 + ${b}^2 = ${Math.pow(a, 2) + Math.pow(b, 2)}`

sum1(a, b);

console.log(sum2(a, b));

export {}