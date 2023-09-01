const arr: Array<string> = ['Apple', 'Cat', 'Banana', 'Orange'];

const part1: Array<string> = arr.slice(0, arr.length / 2);
const part2: Array<string> = arr.slice(arr.length / 2, arr.length);

console.log(arr);
console.log(part1);
console.log(part2);

export {}