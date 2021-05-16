const Pet = require("../models/pets.model");

module.exports.findAllPets = (req, res) => {
    Pet.find().sort({type:-1})
        .then(allDaPets => res.status(200).json({ pets: allDaPets }))
        .catch(err => res.status(500).json(err));
};

module.exports.createAPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.status(200).json({ pets: newlyCreatedPet }))
        .catch(err => res.status(500).json(err));
};

module.exports.findAPet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(oneSinglePet => res.status(200).json({ pets: oneSinglePet }))
		.catch(err => res.status(500).json(err));
};

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPet => res.json({ pets: updatedPet }))
    .catch(err => res.status(500).json(err));
};

module.exports.deleteAPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.status(500).json(err));
};

// .catch(err => res.status(500).json({ message: "Something went wrong", errors: err }));