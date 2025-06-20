import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "User doesnot have token" });
    }

    let verifyToken = await jwt.verify(token, process.env.SECRET_KEY);

    if (!verifyToken) {
      return res
        .status(400)
        .json({ message: "User doesnot have a valid token" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.log("isAuth error");
    return res.status(500).json({ message: `isAuthError${error}` });
  }
};

export default isAuth;
