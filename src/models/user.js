const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 4,
            maxLength: 50,
        },
        lastName: {
            type: String,
        },
        emailId: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            min: 18,
        },
        gender: {
            type: String,
            enum: {
                values: ["male", "female", "other"],
                message: `{VALUE} is not a valid gender type`,
            },
        },
        isPremium: {
            type: Boolean,
            default: false,
        },
        membershipType: {
            type: String,
        },
        photoUrl: {
            type: String,
            default: "https://geographyandyou.com/images/user-profile.png",
        },
        about: {
            type: String,
            default: "This is a default about of the user!",
        },
        skills: {
            type: [String],
        },
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
