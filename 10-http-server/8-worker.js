import express from "express"

const MAIN_PORT = 8000;
const id = parseInt(process.argv[2], 10);
const port = MAIN_PORT + id;
const pid = process.pid;

const app = express();

app.get('/', (req, res) => {
    res.end('Hello World!');
});

app.listen(port, () => {
    console.log(`Worker ID: ${id}, pid: ${pid}, port: ${port}`);
})
