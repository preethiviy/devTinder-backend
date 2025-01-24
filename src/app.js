require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");

const { PORT, NODE_ENV } = require("./constants/env");
const connectToDatabase = require("./config/db");

const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);

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
