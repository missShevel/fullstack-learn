const promises = [
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://dsffdsfsdfsd.typicode.com/users"),
];

(async () => {
  const res = await Promise.allSettled(promises);
  console.log(res);
})();
