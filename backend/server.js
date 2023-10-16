require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const mongoose = require("mongoose");
const app = express();
const URI = process.env.DB_URI;
const port = process.env.PORT;

app.use(express.json());
app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to db and Listening at " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
