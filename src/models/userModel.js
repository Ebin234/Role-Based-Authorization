const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: {
        values: ["admin", "manager", "user"],
        message: `{VALUE} is not supported`,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
