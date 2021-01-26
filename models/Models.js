const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let registration = new Schema({
    User_name:{
        type:String,

    },
    user_email: {
        type: String,
    },
    User_Password:{
        type: Number
    },

})

module.exports = mongoose.model('session', registration )