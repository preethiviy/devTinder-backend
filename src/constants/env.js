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
const JWT_SECRET = getEnv("JWT_SECRET");

module.exports = { NODE_ENV, PORT, MONGO_URI, APP_ORIGIN, JWT_SECRET };
