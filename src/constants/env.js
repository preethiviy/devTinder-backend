const getEnv = (key, defaultValue) => {
    const value = process.env[key] || defaultValue;

    if (value === undefined) {
        throw new Error(`Missing enironment variable ${key}`);
    }

    return value;
};

const NODE_ENV = getEnv("NODE_ENV", "development");
const PORT = getEnv("PORT", "4004");
const MONGO_URI = getEnv("MONGO_URI");
const APP_ORIGIN = getEnv("APP_ORIGIN");

module.exports = { NODE_ENV, PORT, MONGO_URI, APP_ORIGIN };
