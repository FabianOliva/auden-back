const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);
    // req.body.id = decoded.id;
    req.body.name = decoded.user.name;

    next();
  } catch (err) {
    console.log("Error:", err); //para imprimir el error en la consola
    res.status(401).json({ msg: "Token is not valid" });
  }
};
