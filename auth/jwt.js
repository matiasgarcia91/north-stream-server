const jwt = require("jsonwebtoken");

const jwtSecret =
  process.env.jwtSecret || "jh1v23hasdvb!%!@4bdajhkr#$%!@dadadsa";

function toJWT(data) {
  return jwt.sign(data, jwtSecret, { expiresIn: "2h" });
}

function toData(token) {
  return jwt.verify(token, jwtSecret);
}

module.exports = { toJWT, toData };
