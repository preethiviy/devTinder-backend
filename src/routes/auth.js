const express = require("express");
const authRouter = express.Router();

const User = require("../models/user");

authRouter.post("/signup", async (req, res) => {
    try {
        // Validation of data
        // todo

        const { firstName, lastName, emailId, password } = req.body;

        // Encrypt the password
        // todo

        //   Creating a new instance of the User model
        const user = new User({
            firstName,
            lastName,
            emailId,
            password,
        });

        const savedUser = await user.save();

        res.json({ message: "User Added successfully!", data: savedUser });
    } catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
});

module.exports = authRouter;
