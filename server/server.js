const express = require("express");
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");
const { rootRouter } = require("./routers");
const {
  rootRouterPlayground,
} = require("./playground/routers/uploadImg/uploadImg");
require("dotenv").config();
const app = express();
const port = 8080;
// ? Allow call api in local server
app.use(cors());
// ? Change data type to json
app.use(express.json());
// ? Set up static path
const publicPath = path.join(__dirname, "./public");
app.use(express.static(publicPath));
// ? Use Router
app.use("/api/v1", rootRouter);
// ? Listen port
app.listen(port, async () => {
  console.log(`Server is running in http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
