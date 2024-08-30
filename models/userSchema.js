const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        minlength: [4, "length must atleast 4 characters"],
        maxlength: [15, "length maximum limit 15 characters"]
    },
    email:{
        type: String,
        trim: true,
    },
    password: String,
},
 {timestamps: true}
);

userSchema.plugin(plm);

const User = mongoose.model("User", userSchema);

module.exports = User
