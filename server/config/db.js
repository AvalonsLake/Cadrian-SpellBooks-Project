require("dotenv").config;
const mongoose = require("mongoose");

const dbPathway = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbPathway);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};

/*
const Post = require("../models/spells");

function insertData() {
  Post.insertMany([
  ]);
}

insertData();
*/
module.exports = { connectDB, getDb };
