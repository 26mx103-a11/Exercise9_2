
const express = require("express");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: false }));

// GET route – Display form
app.get("/", (req, res) => {
    res.render("home");
});

// POST route – Receive student details
app.post("/submit", (req, res) => {

    const name = req.body.name;
    const regno = req.body.regno;

    let subjects = req.body.subjects || [];

    // Convert single selection into an array
    if (!Array.isArray(subjects)) {
        subjects = [subjects];
    }

    res.render("result", {
        name: name,
        regno: regno,
        subjects: subjects
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
