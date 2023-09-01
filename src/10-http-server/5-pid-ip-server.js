import express from "express"
import os from 'node:os'
import requestIP from 'request-ip'

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.status(201).json({
    number_of_processors: os.cpus().length,
    IP: requestIP.getClientIp(req),
    process_id: process.pid,
    port: port
  });
});

app.listen(port);
