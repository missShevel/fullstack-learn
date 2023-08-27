import { readFileSync } from 'node:fs';

const FILE = "file.txt";

try {
    const content = readFileSync(FILE);
    console.log(content.toString());
} catch (err) {
    console.log(err.message);
}