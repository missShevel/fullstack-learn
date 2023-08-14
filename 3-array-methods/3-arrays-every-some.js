const arr1 = [1,4,5,8];
const arr2 = [2, 8, 16, 4];

const even = (el) => el%2 === 0;
const hasAnyEven = arr1.some(even);
const hasAllEven = arr2.every(even);

console.log(hasAnyEven);
console.log(hasAllEven);
