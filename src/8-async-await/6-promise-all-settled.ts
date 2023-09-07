const promises: Promise<Response>[] = [
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://dsffdsfsdfsd.typicode.com/users"),
];

(async () => {
  const res: PromiseSettledResult<Response>[] = await Promise.allSettled(promises);
  console.log(res);
})();

export {};