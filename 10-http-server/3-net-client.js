import net from "node:net"

const socket = new net.Socket();

socket.connect({
    port: "8000",
    host: "127.0.0.1"
});

socket.on("data", (data)=> {
    console.log("Client received: ", data.toString());
    socket.write("Data received, thank you, Чисник!")
});
