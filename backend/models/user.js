const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    
    username: {type: String, requerid:true},
    password : {type: String, required: true},
    type: {type: Boolean, requerid:true},
    desc:{type: String}
});

module.exports = mongoose.model('User', userSchema );