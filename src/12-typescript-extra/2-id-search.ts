interface IUser {
  name: string;
  id: number;
}

const users: IUser[] = [
  { name: "John", id: 18 },
  { name: "Paul", id: 10 },
];


function printNameByIdOrUser(idOrUser: number) : void;
function printNameByIdOrUser(idOrUser: IUser) : void;
function printNameByIdOrUser(idOrUser: number | IUser) {
    if (typeof idOrUser === "number") {
        const res = users.find((user) => user.id === idOrUser);
        console.log(res?.name);
    } else if (typeof idOrUser === "object") {
        console.log(idOrUser.name);   
    }
}

printNameByIdOrUser({ name: "John", id: 18 });

export {};
