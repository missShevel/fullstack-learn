const arr: number[] = [1,2,1,4,5,5,5,2,6];

const set: Set<number> = new Set(arr);
const arrUnique: number[] = Array.from(set);
console.log(arr);
console.log(arrUnique);

export {}