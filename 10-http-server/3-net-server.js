import net from "node:net";

const hostname = "127.0.0.1";
const port = 8000;

const server = net.createServer((socket) => {
  // Handle data received from the client
  socket.end('Hello Чисник!')
  socket.on("data", (data) => {
    console.log("Received data:", data.toString());
  });



});

server.listen(port, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});



