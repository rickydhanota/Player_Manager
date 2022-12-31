const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost/playerManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4, //Without this I keep getting the mongoose server selection error
})
.then(() => {console.log("Established connection to the db, from mongoose.config")})
.catch((err) => {console.log(err, "from mongoose.config")});