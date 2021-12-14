const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: [true, "First Name is required"],
        minlength: [3, "Minimum length is 3 characters"],
    },

    lastName: { 
        type: String,
        required: [true, "Last Name is required"],
        minlength: [3, "Minimum length is 3 characters"] 
    },
    position: {
        type: String,
    },
    gameStatus: {
        type: String,
        default: 'undecided'
    }
}, { timestamps: true });

module.exports = mongoose.model('Player', PlayerSchema);