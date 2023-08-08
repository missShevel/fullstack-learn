console.log(1)

const timeout = setTimeout(() => console.log(2), 5000);
setTimeout(() => clearTimeout(timeout), 1000);

console.log(3);
