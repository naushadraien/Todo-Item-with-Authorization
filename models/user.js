import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
        select : false,
        minLength: [6, 'Password must be atleast 6 characters long'],
    }
},{
    timestamps: true,
}
);

mongoose.models = {}; // this is required to avoid overwriting models already declared

export const User = mongoose.model('User', schema);