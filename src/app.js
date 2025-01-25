require("dotenv/config");
const express = require("express");
const cookieParser = require("cookie-parser");

const { PORT, NODE_ENV } = require("./constants/env");
const connectToDatabase = require("./config/db");

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);

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
