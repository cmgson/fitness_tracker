const router = require("express").Router();
const db = require("../models")


router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        },
    ])
    .then(workout => {
        console.log("workout workout " + workout);
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
    .then(workout => {
        res.json(workout);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
    console.log("did i make it to the get route?");
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        },
    ])
        .sort({ date: -1 })
        .then(workouts => {
            
            console.log(workouts);
            res.json(workouts);
    })
    .catch(err => {
        res.status(400).json(err);
    })
    
});



router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id,
        {
           $push:
           {
               exercises: body
           }
        },
        { new: true }
    ).then(workout => { res.status(200).json(workout) })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err)
    });
});

router.post('/api/workouts', (req, res) => {
    db.Workout.create({})
    .then((workout) => { res.json(workout) })
    .catch((err) => {
        console.log(err);
        res.json(err);
    })
});

module.exports = router;