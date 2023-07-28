const arr = [1,2,3,4,5,6,7,8,9,10];
const arrEven = arr.filter((el) => el % 2 === 0);
const arrOdd = arr.filter((el) => el % 2 !== 0);

console.log(arrEven);
console.log(arrOdd);