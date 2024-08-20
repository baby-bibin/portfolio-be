const express = require("express");
const cors = require("cors");

require("dotenv/config");

const profileRoute = require("./app/routes/profileRoute");

const app = express();
const PORT = process.env.PORT;
const allowedOrigins = [
  "http://localhost:3006",
  "https://baby-bibin.github.io",
];

app.use(express.json());

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use("/profile", profileRoute);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
