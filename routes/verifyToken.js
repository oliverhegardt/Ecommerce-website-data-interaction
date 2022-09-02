//import my json webtoken

const jwt = require("jsonwebtoken");

//How am I going to verfiy my webtoken?

const verfiyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

module.exports = { verfiyToken };
