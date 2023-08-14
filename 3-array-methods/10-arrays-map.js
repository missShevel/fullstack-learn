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

const emails = arr.map((el) => el.email);
console.log(emails);