const URL = "https://jsonplaceholder.typicode.com/users";
const URL2 = "https://api.agify.io/";

interface IUser {
  id: number;
  name: string;
}

interface IUserWithAge {
  name: string,
  age: number,
  count: number
}

async function getResponse(url: string) {
  const response: Response = await fetch(url);
  return await response.json();
}

(async () => {
  const users: IUser[] = await getResponse(URL);
  const names = users.slice(0, 5).map((user) => user.name.split(" ")[0]);
  const promises: Promise<IUserWithAge>[] = names.map((name) => getResponse(`${URL2}?name=${name}`));
  const responses = await Promise.all(promises);
  console.log(responses);
})();

export {};
