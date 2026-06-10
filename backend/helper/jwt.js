const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV || "development";
const privateKey =
  process.env.JWT_KEY || (env === "production" ? undefined : "conduit-dev-key");

if (!privateKey) {
  throw new Error("JWT_KEY is required in production.");
}

module.exports.jwtSign = async (payload) => {
  return jwt.sign(
    { username: payload.username, email: payload.email },
    privateKey,
  );
};

module.exports.jwtVerify = async (token) => {
  return jwt.verify(token, privateKey);
};
