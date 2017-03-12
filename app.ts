import * as express from "express";

const app = express();

const ROOT = __dirname + "/..";

const port = process.env.PORT || 8340;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(ROOT + "/index.html");
});

app.get("bundle.js", (req, res) => {
    res.sendFile(ROOT + "/dist/bundle.js");
});

app.listen(port, "0.0.0.0", () => {
    console.log("The action happens at https://localhost:" + port);
});
