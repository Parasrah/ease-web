const express = require("express");

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
const cfenv = require('cfenv');

const app = express();

const port = process.env.PORT || 8340;

// Determine if production or development
const production = process.env.NODE_ENV !== "development";
console.log("Running in " + (production ? "production" : "development") + " environment");

app.get("/dist/main.js", (req, res) => {
    res.sendFile(__dirname + "/dist/main.js");
});

app.get("/dist/main.js.map", (req, res) => {
    res.sendFile(__dirname + "/dist/main.js.map");
});

app.get("/dist/styles.css", (req, res) => {
    res.sendFile(__dirname + "/dist/styles.css");
});

app.get("/dist/styles.css.map", (req, res) => {
    res.sendFile(__dirname + "/dist/styles.css.map");
});

// Expose index
app.get("/", (req, res) => {

    if (production) {
        // Serve production index
        res.sendFile(__dirname + "/index.html");
    }
    else {
        // Serve dev index
        res.sendFile(__dirname + "/index-dev.html");
    }

});

app.get("/manifest.json", (req, res) => {
    res.sendfile(__dirname + "/manifest.json");
})

// Listen
app.listen(port, "0.0.0.0", () => {
    console.log("The action happens at https://localhost:" + port);
});
