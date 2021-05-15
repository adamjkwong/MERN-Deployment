const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:"http://localhost:3000"}));

const AllMyPetRoutes = require("./routes/pets.routes");
AllMyPetRoutes(app);


app.listen(port, () => console.log("The server is all fired up and ready to tell you about some pets!"));