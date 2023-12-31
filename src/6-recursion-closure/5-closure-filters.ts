const arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a: number,b: number) {
    return (el: number) => el >= a && el <= b;
}

function inArray(arr: number[]) {
    return (el: number) => arr.includes(el);
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

export {}