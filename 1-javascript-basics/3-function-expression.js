function sumOfSquares(a, b) {
    return Math.pow(a, 2) + Math.pow(b, 2);
}

const a = 2;
const b = 3;

let sum = function (a, b) {
    const result = Math.pow(a, 2) + Math.pow(b, 2);
    console.log(`${a}^2 + ${b}^2 = ${result}`);
    return result;
};

sum(a, b);
