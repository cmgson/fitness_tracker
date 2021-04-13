const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const mongoose = require("mongoose");

const databaseUrl = "fitness";
const collections = ["Workout"];
const db = mongojs(databaseUrl, collections);

const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

db.on("error", error => {
    console.log("Database Error:", error);
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});