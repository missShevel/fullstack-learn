import { readFile } from 'node:fs';

const FILE = "file.txt";

readFile(FILE, (err, data) => {
    if (err) {
        throw err;
    } else {
        const content = data.toString();
        console.log(content);
    }
});