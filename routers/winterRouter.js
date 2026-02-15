import express from "express";
import * as path from "path";
import { winter, homepageContent } from "../data/data.js";

const winterRouter = express.Router();
const __dirname = path.resolve();

winterRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: "winter",
    pageName: "winter",
    pageTitle: "Winter",
    pageSubtitle: "Experience the magic of winter",
    season: homepageContent,
    dataList: winter,
  });
});
winterRouter.get("/:name", (req, res) => {
  const activity = winter.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());

  if (!activity) {
    return res.status(404).send("Activity not found");
  }

  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: activity.name,
    pageName: "winter",
    pageTitle: activity.name,
    pageSubtitle: "Seasonal Activity Details",
    dataList: winter,
    activity: activity,
  });
});

export default winterRouter;
