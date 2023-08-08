const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr = [0, ...arr1, ...arr2, 7];
console.log(arr);

const obj1 = {
    username: 'user1',
    age: 15,
    hobby: 'knitting'
};

const {username, ...rest} = obj1;
console.log(username);
console.log(rest);

const obj2 = {
    dream: 'flying',
    ...obj1
}

console.log(obj2);