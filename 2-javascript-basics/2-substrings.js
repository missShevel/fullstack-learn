const string = "Hello my perfect world";

const substr1 = string.slice(9, 16); // we can use indexes with "-", it will count from the end of string
console.log(substr1);

const substr2 = string.substring(16, 9); // we can swap indexes and set end greater than start
console.log(substr2);

const substr3 = string.substr(9, 7);
console.log(substr3);

