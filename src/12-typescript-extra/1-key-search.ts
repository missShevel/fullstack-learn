interface IUser {
  name: string;
  age: number;
}

const users: IUser[] = [
  { name: "John", age: 18 },
  { name: "Paul", age: 10 },
];

type Key = keyof IUser;
function search(key: Key, value: IUser[Key]) {
  return users.find((user) => user[key] === value);
}

console.log(search("name", "Paul"));

export {};
