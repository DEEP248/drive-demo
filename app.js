const express = require("express");
const userRouter = require("./routes/user.routes");
const homeRouter = require("./routes/index.routes");
const dotenv = require("dotenv");
const path = require("path");

const cookieparser = require("cookie-parser");
dotenv.config();

const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
