console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);

// Output: 1 3 2
/**
 - first line goes to stask and performs 
 - second line goes to WebApi and then moves to callback queue to be performed after synchronous code
 - third line goes to stask and performs 
 - second line moves from queue to stack and performes
 */