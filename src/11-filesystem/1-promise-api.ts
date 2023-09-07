import { readFile } from "node:fs/promises";

const FILE = "file.txt";

(async () => {
  try {
    const content: Buffer = await readFile(FILE);
    console.log(content.toString());
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
})();

export {};
