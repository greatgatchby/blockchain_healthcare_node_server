const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: `*`
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hi i'm Liv, Your PatientFunctions Record Assistant." });
});
require("./app/routes/api.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
