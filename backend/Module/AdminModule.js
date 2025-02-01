const mongoose = require('mongoose');


const AdminSechma = new mongoose.Schema(

    {
        name:String,
        email:String,
        password:String
    }
)

module.exports = mongoose.model("Admin", AdminSechma);

