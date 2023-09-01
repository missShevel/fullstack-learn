const arr1: number[] = [1, 4, 5, 8];
const arr2: number[] = [2, 8, 16, 4];

const even = (el:number): boolean => el % 2 === 0;
const hasAnyEven: boolean = arr1.some(even);
const hasAllEven: boolean = arr2.every(even);

console.log(hasAnyEven);
console.log(hasAllEven);

export {};
