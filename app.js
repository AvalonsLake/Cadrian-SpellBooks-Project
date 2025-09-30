require("dotenv").config;

const express = require("express");
const app = express();
const mongodb = require("./server/config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const PORT = process.env.PORT || 4000;

app
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  });

app.use(express.static("public"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(
      "\x1b[34m%s\x1b[0m",
      `Connected to DB and listening on ${PORT}`
    );
  }
});

app.use("/", require("./server/routes/index"));
