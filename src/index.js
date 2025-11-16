const express = require("express");
const connectDB = require("./config/connectDB");
const dotenv = require("dotenv").config({ quiet: true });
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const cookieParser = require('cookie-parser');

const app = express();

/*//////////////////////////////////////////////////////////////
                              MIDDLEWARES
//////////////////////////////////////////////////////////////*/
app.use(cookieParser());
app.use(express.json());


/*//////////////////////////////////////////////////////////////
                                 ROUTES
//////////////////////////////////////////////////////////////*/

app.use("/", authRouter);
app.use("/", userRouter);

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
