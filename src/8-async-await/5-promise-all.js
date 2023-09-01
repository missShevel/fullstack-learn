const ids = [1, 2, 3];
const promises = ids.map((id) => fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`));

(async () => {
    const responses = await Promise.all(promises);
    const responsesJson = await Promise.all(responses.map(a => a.json()));
    console.log(responsesJson);

    for (const id of ids) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
        const resJson = await res.json();
        console.log(resJson);
    }
})();

