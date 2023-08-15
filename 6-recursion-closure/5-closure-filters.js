let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a,b) {
    return (el) => el >= a && el <= b;
}

function inArray(arr) {
    return (el) => arr.includes(el);
}

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2