const express = require("express");

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
const cfenv = require('cfenv');

const app = express();

const port = process.env.PORT || 8340;

// Determine if production or development
const production = process.env.NODE_ENV == "development" ? false : true;
console.log("Running in " + (production ? "production" : "development") + " environment");

if (production) {
    // Run in production mode, expose limited files
    app.get("/dist/bundle.js", (req, res) => {
        res.sendFile(__dirname + "/dist/bundle.js");
    });
}
else {
    // Run in development mode, expose root
    app.use("/", express.static(__dirname));
}

// Expose index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/manifest.json", (req, res) => {
    res.sendfile(__dirname + "/manifest.json");
})

// Listen
app.listen(port, "0.0.0.0", () => {
    console.log("The action happens at https://localhost:" + port);
});
