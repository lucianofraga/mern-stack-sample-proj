const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    id:{
        type: Number,        
    },
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    }
}, {collection: "Users"});

module.exports = User = mongoose.model("User", userSchema);