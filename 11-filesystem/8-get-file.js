import bytes from "bytes";
import express from "express";
import { ensureDir } from "fs-extra";
import multer from "multer";

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./8-uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage, limits: { fileSize: bytes("2MB") } });

app.get(
  "/",
  async (req, res, next) => {
    await ensureDir("8-uploads");
    next();
  },
  upload.single("file"),
  (req, res) => {
    console.log(req.file);
    res.json({ saved: true });
  }
);

app.listen(8000);
