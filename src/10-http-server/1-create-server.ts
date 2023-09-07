import http from "http"

const hostname = "127.0.0.1";
const port = 8000;

const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' }),
   res.end('Hello Worlllld!\n')
});

server.listen(port, hostname, () => {
   console.log(`Server is running on http://${hostname}:${port}`);
})

