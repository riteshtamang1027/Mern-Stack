import jwt from "jsonwebtoken";
export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const pureToken = authHeader.split(" ")[1];
  // console.log(pureToken);

  if (!pureToken) {
    return res.status(401).json({
      message: "Token is not found.",
    });
  }

  jwt.verify(pureToken, "secretsdfghjkhgfd", function (err, decoded) {
    console.log(decoded);
    if (err) {
      return res.status(401).json({
        message: "Token found but token invalided.",
      });
    }
  });
  next();
};
