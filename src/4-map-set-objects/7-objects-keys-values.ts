interface IUser {
    name: string,
    age: number,
    occupation: string
}
const user: IUser = {
    name: "John",
    age: 30,
    occupation: "accountant"
  };

for (let key of Object.keys(user)) {
    console.log(key);
}

for (let value of Object.values(user)) {
    console.log(value);
}

export {}