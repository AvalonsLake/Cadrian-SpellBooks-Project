require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("public"));

app.listen(port, () => console.log(`Server is Listening on Port ${port}...`));

const connectDB = require("./server/config/db");
connectDB();
