const arr1 = [1,5,2,7,5,8,9,5,1];
const arr2 = [
	{
		email: 'user@mail.com',
		age: 18
	},
	{
		email: 'user2@mail.com',
		age: 39
	},
	{
		email: 'user3@mail.com',
		age: 21
	}
]

const sortedArr1 = arr1.sort((a, b) => a - b);
const sortedArr2 = arr2.sort((a, b) => b.age - a.age);


console.log(arr1);
console.log(sortedArr1);
console.log(arr2);
console.log(sortedArr2);