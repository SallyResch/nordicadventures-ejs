import express from "express";
import * as path from "path";
import "dotenv/config";
import winterRouter from "./routers/winterRouter.js"
import summerRouter from "./routers/summerRouter.js"
import autumnRouter from "./routers/autumnRouter.js"

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(
        path.join(__dirname, "/views/pages/index"),
        {
            pageTitle: "Welcome to Nordic Adventures",
            pageSubtitle: "You can experience many exciting activities in Sweden."
        }
    )
})


app.use("/winter", winterRouter)
app.use("/summer", summerRouter)
app.use("/autumn", autumnRouter)
app.listen(port, () => console.log(`Listening to port ${port}`))