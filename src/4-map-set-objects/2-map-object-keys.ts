interface IUser {
  name: string;
  city: string;
}
const map: Map<IUser, number> = new Map();

const obj1: IUser = { name: "Linda", city: "London" };
const obj2: IUser = { name: "Neil", city: "Birkenhead" };

map.set(obj1, 10);
map.set(obj2, 25);

console.log(map.has(obj1));
console.log(map.has(obj2));

console.log(map);

export {};
