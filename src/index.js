const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config({ quiet: true });
const authRouter = require("./routes/authRouter");

const app = express();

/*//////////////////////////////////////////////////////////////
                              MIDDLEWARES
//////////////////////////////////////////////////////////////*/

app.use(express.json());

/*//////////////////////////////////////////////////////////////
                                 ROUTES
//////////////////////////////////////////////////////////////*/

app.use("/", authRouter);

/*//////////////////////////////////////////////////////////////
                        START THE SERVER
//////////////////////////////////////////////////////////////*/

const PORT = process.env.PORT || 3002;
connectDB()
  .then((data) => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
