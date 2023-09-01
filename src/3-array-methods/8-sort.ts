const arr1: number[] = [1,5,2,7,5,8,9,5,1];

type UserRecord = {
	email: string,
	age: number
}
const arr2: UserRecord[] = [
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
];

const sortedArr1: number[] = arr1.sort((a, b) => a - b);
const sortedArr2: UserRecord[] = arr2.sort((a, b) => b.age - a.age);


console.log(arr1);
console.log(sortedArr1);
console.log(arr2);
console.log(sortedArr2);

export {}