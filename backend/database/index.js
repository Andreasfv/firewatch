const mongoose = require("mongoose");
const {DB_URL} = require("../../config")
const { fireSchema } = require("./schema/fire");

//I know ;) not the safest to post to github
mongoose.connect("mongodb+srv://Andreas:fastforward24@lyche.2h5du.mongodb.net/FireWatch?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, ()=> {
    console.log("Mongoose connecting!")
})

let db = mongoose.connection;
console.log("Mongoose init kjører")
db.on('error', () => {
    console.error("Error while connecting to DB");
})

const Fire = mongoose.model("FireWatch", fireSchema)

export { Fire };

