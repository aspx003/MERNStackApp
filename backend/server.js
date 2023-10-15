require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/workouts' , workoutRoutes);


app.listen(port, () => {
  console.log("Listening at " + port);
});
