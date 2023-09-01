import { copyFile, readFile, writeFile, stat, rm, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const SRC = 'file.txt';
const DEST = 'file_copy.txt'
const DEST2 = 'file_copy2.txt'

copyFile(SRC, DEST);

const fileContent = await readFile(SRC);
console.log(fileContent.toString());

await writeFile(DEST2, fileContent);

console.log(await stat(SRC));

await rm(DEST2);

const filePath = fileURLToPath(import.meta.url);
// console.log(filePath);
const dir = dirname(filePath);
// console.log(dir)

const allFiles = await readdir(dir);

for (const file of allFiles) {
    console.log(file);
}