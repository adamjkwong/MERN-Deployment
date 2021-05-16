const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name: {
        type: String,
        required: [true, "you must have a name for this pet"],
        minLength: [3, "your name must be at least 3 characters"],
        unique: [true,"all pets must have a unique name"],
        //Unique considering upper and lower cases
    },
	type: {
        type: String,
        required: [true, "you must have a type for this pet"],
        minLength: [3, "your type must be at least 3 characters"],
    },
    description : {
        type: String,
        required: [true, "you must have a description for this pet"],
        minLength: [3, "your description must be at least 3 characters"],
    },
    skill_1 : {
        type: String,
        default: 'none',
    },
    skill_2 : {
        type: String,
        default: 'none',
    },
    skill_3 : {
        type: String,
        default: 'none',
    },
},
    { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
