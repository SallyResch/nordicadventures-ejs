import express from "express";
import * as path from "path";
import { winter } from "../data/data.js";

const winterRouter = express.Router();
const __dirname = path.resolve();

winterRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: "winter",
    pageTitle: "Winter",
    pageSubtitle: "Experience the magic of winter!",
  });
});

export default winterRouter;
