const ids = [1, 2, 3];
const promises = ids.map((id) => fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`));

const timeBeforeParallel = Date.now();
Promise.all(promises)
.then((res) => {
    // res is an array of results of promises
    console.log(res);
    return Promise.all(res.map(a => a.json()));
})
.then((res) => {
    console.log(res);
});
const timeAfterParallel = Date.now();

const timeBeforeSeq = Date.now();
for (let id of ids) {
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .then(res => {
        return res.json();
    }).then(res => console.log(res));
}
const timeAfterSeq = Date.now();

console.log('Time for parallel', timeAfterParallel - timeBeforeParallel);
console.log('Time for sequential', timeAfterSeq - timeBeforeSeq);
