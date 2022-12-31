const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        // minlength: [1, "First name must be at least 1 character long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
    },
    position: {
        type: String,
        required: [true, "Team position is required"],
        minlength: [1, "Position must be at least 1 character long"],
    },
    sport: {
        type: String,
        required: [true, "Sport name is required"],
        minlength: [3, "Sport name must be at least 3 characters long"],
    },
    team: {
        type: String,
        required: [true, "Team name is required"],
        maxlength: [100, "Team name must be at least 6 characters long"],
    },
}, {timestamps: true})

module.exports = mongoose.model("Player", PlayerSchema);