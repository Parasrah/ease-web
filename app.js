const express = require("express");

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
const cfenv = require('cfenv');

const app = express();

const port = process.env.PORT || 8340;

app.use("/", express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/dist/bundle.js", (req, res) => {
    res.sendFile(__dirname + "/dist/bundle.js");
});

app.listen(port, "0.0.0.0", () => {
    console.log("The action happens at https://localhost:" + port);
});
