import { readFile } from 'node:fs/promises';

const FILE = "file.txt";

try {
    const content = await readFile(FILE);
    console.log(content.toString());
} catch (err) {
    console.error(err.message);
}
