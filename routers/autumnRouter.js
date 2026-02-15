import express from "express";
import * as path from "path";
import { autumn } from "../data/data.js";

const autumnRouter = express.Router();
const __dirname = path.resolve();

autumnRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    pageTitle: "Autumn",
    pageSubtitle: "Enjoy the autumn colors",
    documentTitle: "Autumn",
    pageName: "autumn",
    dataList: autumn,
  });
});
autumnRouter.get("/:name", (req, res) => {
  const activity = autumn.find(item => item.name === req.params.name);

  if (!activity) {
    return res.status(404).send("Activity not found");
  }

  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: activity.name,
    pageName: "autumn",
    pageTitle: activity.name,
    pageSubtitle: activity.description,
    dataList: autumn,
    activity: activity,
  });
});

export default autumnRouter;
