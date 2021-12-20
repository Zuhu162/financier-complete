const jwt = require("jsonwebtoken");
const config = require("config");

function currentUser(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    if (decoded._id !== req.params.id)
      return res.status(403).send("Access Denied");

    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send("invalid token");
  }
}

module.exports = currentUser;
