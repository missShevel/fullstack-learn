import express from "express"
import cluster from "node:cluster"
import os from "node:os"

const app = express();
const port = 8000;
const pid = process.pid;

if(cluster.isPrimary) {
    const cpusCount = os.cpus().length;
    console.log(`Master PID: ${pid}`);
    console.log(`Number of forks: ${cpusCount}`);
    for (let i = 0; i < cpusCount; i++) {
        cluster.fork();
    }
} else {
    const id = cluster.worker.id;
    console.log(`ID: ${id}, PID: ${pid}, port: ${port}`);
    app.get("/", (req, res) => {
        res.json({
            status: 200,
            cluster: id,
            pid
        });
    });
    app.listen(port);
}
