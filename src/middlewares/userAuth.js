const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const userAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "token not found" });
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      throw new Error("Invalid Token");
    }
    const user = await UserModel.findById(verifyToken.id).select(
      "_id email role"
    );
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    res
      .status(400)
      .json({ data: err.message, message: "Something went wrong" });
  }
};

module.exports = userAuth;
