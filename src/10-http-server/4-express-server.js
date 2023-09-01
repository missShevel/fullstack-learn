import express from "express"
import fs from 'node:fs/promises'

const app = express();
const port = 8000;

app.post("/text", (req, res) => {
  res.status(201).send("Чисник.");
});

app.put("/json", (req, res) => {
  res.status(201).json({
    item: "Чисник?",
  });
});

app.get("/html", async (req, res) => {
    const file = await fs.readFile('index.html');
    res.set("Content-Type", "text/html");
    res.status(201).send(file);
});

app.listen(port);
