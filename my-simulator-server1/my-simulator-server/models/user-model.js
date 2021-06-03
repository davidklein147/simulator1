const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    details:{
        id:{
            type: String,
            unique: true
        },
        name:{
            type:String,
            required: true
        },
        passport:{
            type:String
        },
        phoneNum:{
            type:String
        },
    },
    register:{
        userName: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
    },
    role:{
        type: String
    },
    roleNum:{
        type: Number
    },
    
});

module.exports = mongoose.model('user',userSchema);