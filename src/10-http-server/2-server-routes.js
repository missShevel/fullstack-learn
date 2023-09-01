import http from "http";

const hostname = "127.0.0.1";
const port = 8000;
const routes = {
  "/": {
    GET: "<h1>Chysnyk</h1><h2>Cybulya</h2>",
  },
  "/hello": {
    POST: "Hello sent",
    GET: {
      spanish: {
        hello: "Ola",
      },
    },
  },
};

const types = {
  string: (s) => s,
  object: (obj) => JSON.stringify(obj),
};

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const data = routes[url][method];
  const type = typeof data;
  const serializer = types[type];
  const result = serializer(data);

  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
