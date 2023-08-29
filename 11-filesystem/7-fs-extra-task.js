import fse from "fs-extra";

const FILE_NAME = "5-file.json";

const startData = await fse.readJSON(FILE_NAME);

const dataUpdated = startData.map((user) => ({
  ...user,
  salary: user.salary * 2,
}));

await fse.writeJSON("7-result.json", dataUpdated);
