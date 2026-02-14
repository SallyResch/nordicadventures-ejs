import express from "express";
import * as path from "path";
import { summer } from "../data/data.js";

const summerRouter = express.Router();
const __dirname = path.resolve();

summerRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: "Summer",
    pageName: "summer",
    pageTitle: "Summer",
    pageSubtitle: "Feel the warmth of summer!",
    dataListSummer: summer
  });
});

export default summerRouter;
