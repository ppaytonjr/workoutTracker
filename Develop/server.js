const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

db.Workout.create({})
.then(dbExercise => {
  console.log(dbExercise)
});

app.get("/exercise", (req, res) => {
  db.Workout.find({})
  .then(dbExercise => {
    res.json(dbExercise)
  })
  .catch(err => {
    res.json(err)
  });
})

app.get("/stats", req, res) => {
  db.Workout.find({})
}

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  