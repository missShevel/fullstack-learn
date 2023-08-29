import { readFile, writeFile } from "node:fs/promises";

const FILE_NAME = "5-file.json";

const rawData = (await readFile(FILE_NAME)).toString();

const dataPrepared = JSON.parse(rawData);

const dataUpdated = dataPrepared.map((user) => ({
  ...user,
  salary: user.salary * 2,
}));

await writeFile("5-result.json", JSON.stringify(dataUpdated, null, 2));
