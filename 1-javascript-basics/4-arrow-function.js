function sumOfSquares(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

const a = 2;
const b = 3;

let sum1 = (a, b) => {
    const result = Math.pow(a, 2) + Math.pow(b, 2);
    console.log(`${a}^2 + ${b}^2 = ${result}`);
    return result;
};

let sum2 = (a, b) => `${a}^2 + ${b}^2 = ${Math.pow(a, 2) + Math.pow(b, 2)}`

sum1(a, b);

console.log(sum2(a, b));
