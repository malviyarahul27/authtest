const mongoose = require("mongoose");

mongoose.connect('mongodb://0.0.0.0/Authtest')
        .then(()=> console.log("DataBase Connected"))
        .catch((error)=> console.log(error.message))

// mongodb://127.0.0.1:27017/