const URL = "https://jsonplaceholder.typicode.com/users";
const URL2 = "https://api.agify.io/";

async function getResponse(url) {
  const response = await fetch(url);
  return await response.json();
}

(async () => {
  const users = await getResponse(URL);
  const names = users.slice(0, 5).map((user) => user.name.split(" ")[0]);
  const promises = names.map((name) => getResponse(`${URL2}?name=${name}`));
  const responses = await Promise.all(promises);
  console.log(responses);
})();

