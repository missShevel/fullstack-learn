function sumOfSquares(a: number, b: number): number {
  return Math.pow(a, 2) + Math.pow(b, 2);
}

const a: number = 2;
const b: number = 3;

let sum = function (a: number, b: number): number {
  const result = Math.pow(a, 2) + Math.pow(b, 2);
  console.log(`${a}^2 + ${b}^2 = ${result}`);
  return result;
};

sum(a, b);
sumOfSquares(a, b);

export {};
