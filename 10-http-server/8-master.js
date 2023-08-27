import os from "node:os";
import cp from "node:child_process";

const pid = process.pid;
const cpus = os.cpus().length;

console.log(`Master PID: ${pid}`);
console.log(`Number of workers: ${cpus}`);

for (let i = 0; i < cpus; i++) {
  cp.fork("./8-worker.js", [i]);
}
