const router = require("express").Router();
const Workout = require("../models");

router.get("/api/workouts", (req, res) => {
    console.log("did i make it to the get route?");
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            
            console.log(dbWorkout);
            res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
    
});

module.exports = router;