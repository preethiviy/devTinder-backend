require("dotenv/config");
const express = require("express");
const { PORT, NODE_ENV } = require("./constants/env");
const connectToDatabase = require("./config/db");

const app = express();

app.use(express.json());

connectToDatabase()
    .then(() => {
        console.log("Successfully connected to DB");
        app.listen(PORT, async () => {
            console.log(
                `Server is running on port ${PORT} in ${NODE_ENV} environment.`
            );
        });
    })
    .catch((error) => {
        console.log("Could not connect to database", error);
        process.exit(1);
    });
