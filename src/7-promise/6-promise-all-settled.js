const promises = [fetch("https://jsonplaceholder.typicode.com/users"), fetch("https://dsffdsfsdfsd.typicode.com/users")];

Promise.allSettled(promises).then(res => {
    console.log(res);
});
