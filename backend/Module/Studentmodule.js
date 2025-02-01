const mongoose = require('mongoose');


const Student_Schema = mongoose.Schema(
    {


        name :String,
        phone:Number,
        location:String,
        regno:Number,
        course:String,
        duration:String,
        fees:Number,
        received:Number,
        pending:Number,
        balance:Number,
        status:String,
    }
)

module.exports = mongoose.model("Student", Student_Schema);

 

