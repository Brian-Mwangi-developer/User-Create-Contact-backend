const mongoose = require('mongoose');

const Userschema =  mongoose.Schema({
    username:{
        type:String,
        required:[true,"please Add your Username"],
    },
    email:{
        type:String,
        required:[true,"Please Add user Email Address"],
        unique:[true,"Email Address already Taken"],
    },
    password:{
        type:String,
        required:[true,"Please Add User Password"],
    },
},{
    timestamps:true,
});

module.exports = mongoose.model("User", Userschema);