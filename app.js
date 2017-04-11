const express = require("express");
const path = require("path");

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
const cfenv = require('cfenv');

const app = express();

const port = process.env.PORT || 8340;

// Determine if production or development
const production = process.env.NODE_ENV == "development" ? false : true;
console.log("Running in " + (production ? "production" : "development") + " environment");

app.use("/", express.static(path.resolve(__dirname, "dist", "public")));

app.get("/manifest.json", (req, res) => {
    res.sendfile(__dirname + "/manifest.json");
})

// Listen
app.listen(port, "0.0.0.0", () => {
    console.log("The action happens at https://localhost:" + port);
});
