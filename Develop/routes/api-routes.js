const router = require('express').Router();

const db = require('../models/');

const path = require('path');

const Workout = require("../models/workout");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "/public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "/public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "/public/stats.html"));
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbExercise => {
            res.send(dbExercise)
        })
        .catch(err => {
            res.send(err)
        });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbExercise => {
            res.send(dbExercise)
        })
        .catch(err => {
            res.send(err)
        });
});

router.post("api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbExercise => {
            res.send(dbExercise)
        })
        .catch(err => {
            res.send(err)
        })
});

router.get("api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbExercise => {
            res.send(dbExercise)
        })
        .catch(err => {
            res.send(err)
        })
});

router.delete("api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbExercise => {
            res.send(dbExercise)
        })
        .catch(err => {
            res.send(err)
        })
});

module.exports = router;