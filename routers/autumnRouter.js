import express from "express";
import * as path from "path";
import { autumn } from "../data/data.js";

const autumnRouter = express.Router();
const __dirname = path.resolve();

autumnRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: "Autumn",
    pageName: "autumn",
    pageTitle: "Autumn",
    pageSubtitle: "Enjoy the autumn colors!",
    dataList: autumn,
  });
});

export default autumnRouter;
