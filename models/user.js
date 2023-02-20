const mongoose = require("mongoose");

const {Schema} = mongoose;

const userschema = new Schema({
    email:{
        type: String,
        require: true,
        unique: true,
    },
    phone:{
        type: String,
    },
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    password:{
        type: String,
        require: true,
    },
    verified:{
        type: String,
        default: false
    },
    merchant:{
        type: Schema.Types.ObjectId,
        ref: "Merchant",
        default: null,
    },
    googleId:{
        type: String,
    },
    facebookId:{
        type: String,
    },
    avatar:{
        type: String,
    },
    role:{
        type: String,
        default: "member",
        enum: ["admin","member","merchant"]
    },
    resetPasswordToken:{
        type: String,
    },
    resetPasswordTExpires:{
        type: Date,
    },
    update:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now()
    },
});

const user = mongoose.model("user",userschema);

module.exports = user