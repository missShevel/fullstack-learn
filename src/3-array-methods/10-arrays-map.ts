type UserRecord = {
	email: string,
	age: number
};

const arr: UserRecord[] = [
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

const emails: string[] = arr.map((el: UserRecord) => el.email);
console.log(emails);

export {}