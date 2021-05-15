const PetController = require('../controllers/pets.controller');

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets", PetController.createAPet);
    app.get("/api/pets/:id", PetController.findAPet);
    app.put("/api/pets/:id", PetController.updateExistingPet);
    app.delete("/api/pets/:id", PetController.deleteAPet);
};