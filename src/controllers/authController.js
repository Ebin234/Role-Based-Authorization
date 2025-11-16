const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = { email, password: hashPassword, role };
    const userModel = new UserModel(user);
    await userModel.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Something went wrong, " + err.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    // console.log({ user });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    // console.log({ comparePassword });
    if (!comparePassword) {
      return res.status(400).json({ message: "Wrong password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, { maxAge: 60 * 60 * 1000 }) // 1 hr
      .json({ message:"Login Successful"});
  } catch (err) {
    res.status(400).json({ message: "Something went wrong " + err.message });
  }
};

module.exports = { register, logIn };
