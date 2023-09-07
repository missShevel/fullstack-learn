import http from "http";

const hostname = "127.0.0.1";
const port = 8000;

const routes: any = {
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

const types: Record<string, (data: any) => string> = {
  string: (s: string): string => s,
  object: (obj: object): string => JSON.stringify(obj),
};

type Data = string | object;


const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (!url || !method) {
    return res.end("Error")
  }
  const data: Data = routes[url][method];
  const type = typeof data;
  const serializer = types[type as keyof typeof types];
  const result = serializer(data);

  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

export {};