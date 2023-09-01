const url = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://api.agify.io/";
fetch(url)
  .then((res) => res.json())
  .then((res) => {
    const names = res.slice(0, 5).map((user) => user.name.split(" ")[0]);
    const promises = names.map((name) => fetch(`${url2}?name=${name}`));
    return Promise.all(promises);
  })
  .then((res) => {
    const promises = res.map((r) => r.json());
    return Promise.all(promises);
  })
  .then((res) => res.map((entity) => {
      delete entity.count;
      return entity
  }))
  .then(res => console.log(res));
