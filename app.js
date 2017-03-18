import * as express from "express";

const app = express();

const port = process.env.PORT || 8340;

app.use("/public", express.static(__dirname + "dist/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("bundle.js", (req, res) => {
    res.sendFile(__dirname + "/dist/bundle.js");
});

app.listen(port, "0.0.0.0", () => {
    console.log("The action happens at https://localhost:" + port);
});
