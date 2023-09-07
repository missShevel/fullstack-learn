interface IUser {
  name: string;
  age: number;
  surname: string;
}

interface IFruit {
  name: string;
  count: number;
}

const fruits: IFruit[] = [];

const users: IUser[] = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField<T extends object>(fieldName: keyof T) {
  return (a: T, b: T) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

users.sort(byField<IUser>("age"));
fruits.sort(byField<IFruit>("count"));

console.log(users);
