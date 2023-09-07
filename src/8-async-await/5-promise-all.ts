const ids: number[] = [1, 2, 3];
const promises = ids.map((id) =>
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
);

interface IUserCard {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

(async () => {
  const responses: Response[] = await Promise.all(promises);
  const responsesJson: IUserCard[] = await Promise.all(responses.map((a) => a.json()));
  console.log(responsesJson);

  for (const id of ids) {
    const res: Response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    );
    const resJson: IUserCard = await res.json();
    console.log(resJson);
  }

})();

export {};

