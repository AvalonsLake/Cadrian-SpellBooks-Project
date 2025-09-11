require("dotenv").config();

const express = require("express");
const app = express();
const mongodb = require("./server/config/db");

const port = process.env.PORT || 4000;

app.use(express.static("public"));

app.listen(port, () => console.log(`Server is Listening on Port ${port}...`));

mongodb.connectDB();

// mongodb.connectDB((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     app.listen(PORT);
//     console.log(
//       "\x1b[34m%s\x1b[0m",
//       `Connected to DB and listening on ${PORT}`
//     );
//   }
// });
