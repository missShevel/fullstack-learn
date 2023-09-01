const arr: number[] = [1,2,3,4,5,6,7,8,9,10];
const arrEven: number[] = arr.filter((el: number) => el % 2 === 0);
const arrOdd: number[] = arr.filter((el: number) => el % 2 !== 0);

console.log(arrEven);
console.log(arrOdd);

export {}