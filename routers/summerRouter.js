import express from "express";
import * as path from "path";
import { summer, homepageContent } from "../data/data.js";

const summerRouter = express.Router();
const __dirname = path.resolve();

summerRouter.get("/", (req, res) => {
  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: "Summer",
    pageName: "summer",
    pageTitle: "Nordic Adventures",
    pageSubtitle: "Experience exciting activities in Sweden.",
    season: homepageContent,
    dataList: summer,
  });
});
summerRouter.get("/:name", (req, res) => {
  const activity = summer.find(item => item.name.toLowerCase() === req.params.name.toLowerCase());

  if (!activity) {
    return res.status(404).send("Activity not found");
  }

  res.render(path.join(__dirname, "/views/pages/seasonFeature"), {
    documentTitle: activity.name,
    pageName: "summer",
    pageTitle: "Nordic Adventures",
    pageSubtitle: "Experience exciting activities in Sweden.",
    dataList: summer,
    activity: activity,
  });
});

export default summerRouter;
