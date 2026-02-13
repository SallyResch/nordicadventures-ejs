import express from "express";
import * as path from "path";
import "dotenv/config";

const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(
        path.join(__dirname, "/views/pages/index"),
    )
})

app.listen(port, () => console.log(`Listening to port ${port}`))