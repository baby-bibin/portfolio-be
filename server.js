const express = require("express");
require("dotenv/config");

const profileRoute = require("./app/routes/profileRoute");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/profile", profileRoute);

const cors = require("cors");

let corsOptions = {
  origin: ["https://baby-bibin.github.io"],
};
app.use(cors());

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
