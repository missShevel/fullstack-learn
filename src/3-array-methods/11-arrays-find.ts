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

const a = arr.find((el: UserRecord) => el.age === 39);
const b: UserRecord = arr.filter((el: UserRecord) => el.age > 20)[0];
console.log(a);
console.log(b);

export {}