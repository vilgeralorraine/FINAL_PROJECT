const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// start the server
app.get("/", (req, res)=> {
    res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <header>
        <h2><a href="/">Anonymous Journal</a></h2>
        <nav>
            <a href="/submit">Submit</a>
            <a className="nav2" href="#">About<span></span></a>
                    <a className="nav3" href="#">Browse<span></span></a>
        </nav>
    </header>
    <main>
        <form action="/register" method="POST">
            <fieldset>
                <legend>Send a message</legend>
                <label for="uName"><small>Name</small></label>
                <input type="text" id="uName" name="uName" autocomplete="off">

                <label for="message"><small>Type your message</small></label>
                <input type="message" id="message" name="message" autocomplete="off">

                <br />
                <button>Submit</button>
            </fieldset>
        </form>
    </main>
    <footer>
        <small>&copy; Anonymous Journal</small>
    </footer>
</body>
</html>`)
});

//connection to mongodb
mongoose
    .connect("mongodb+srv://LorraineVilgera:LORIRI@finprojectapp.km9yl.mongodb.net/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    });

//Middleware
app.use(cors());
app.use(express.json());

//import API folder
const submitJournalForm = require('./API/submit')

//use API
app.use("/submit", submitJournalForm);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});