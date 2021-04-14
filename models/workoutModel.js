const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "What type of exercise?"
    },


    name: {
        type: String,
        trim: true,
        required: "name your exercise please"
    },


    duration: {
        type: Number,
        required: "what is the duration of the exercise yo!?"
    },


    weight: {
        type: Number,
        required: "what is the weight you be holdin"
    },


    reps: {
        type: Number,
        required: "how many reps you pushin"
    },


    sets: {
        type: Number,
        required: "how many sets"
    },


    distance: {
        type: Number,
        required: "how many miles did they chase you?"
    },

})
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,     
    },
    exercises : [exerciseSchema]
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;