const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const http = require('http');
const server = http.createServer(app);

app.use(express.static('public'));

// start the server
app.get("/", (req, res)=> {
    res.send(`try try`)
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

//start the server locally
// const PORT = 4000;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

//start the server in MS Azure
const PORT = process.env.PORT || 4000;

server.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
})