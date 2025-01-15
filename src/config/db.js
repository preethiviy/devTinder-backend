const mongoose = require("mongoose");
const { MONGO_URI } = require("../constants/env");

const connectToDatabase = async () => {
    await mongoose.connect(MONGO_URI);
};

module.exports = connectToDatabase;
