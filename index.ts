import dotenv from "dotenv";
import express, { Express } from "express";

const bodyParser = require("body-parser");
const cors = require("cors");

const app: Express = express();
const port = process.env.PORT;

dotenv.config();

var corsConfig = {
  origin: "http://localhost:8081",
};

app.use(cors(corsConfig));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to todo application" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

// const db = require("./src/app/models");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });