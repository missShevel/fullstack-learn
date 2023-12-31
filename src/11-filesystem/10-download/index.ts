import express from "express";
import { access } from "node:fs/promises";

const app = express();

app.get("/:filename", async (req, res) => {
  const { filename } = req.params;
  const filepath = `${__dirname}/images/${filename}.jpg`;
  try {
    await access(filepath);
  } catch (err) {
    return res.json({ error: "file not found" });
  }
  res.attachment(filepath);
  res.sendFile(filepath);
});
app.listen(8000);
