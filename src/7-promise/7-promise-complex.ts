const url: string = "https://jsonplaceholder.typicode.com/users";
const url2: string = "https://api.agify.io/";

interface IUser {
  name: string;
}

interface IUserWithAge {
  count?: number;
  name: string;
  age: number;
}

fetch(url)
  .then((res) => res.json())
  .then((res: IUser[]) => {
    const names = res.slice(0, 5).map((user) => user.name.split(" ")[0]);
    const promises: Promise<Response>[] = names.map((name) => fetch(`${url2}?name=${name}`));
    return Promise.all(promises);
  })
  .then((res) => {
    const promises = res.map((r) => r.json());
    return Promise.all(promises);
  })
  .then((res: IUserWithAge[]) =>
    res.map((entity) => {
      delete entity.count;
      return entity;
    })
  )
  .then((res) => console.log(res));
