const arr = [
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

const a = arr.find((el) => el.age === 39);
const b = arr.filter((el) => el.age > 20)[0];
console.log(a);
console.log(b);