import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
        default: false,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,         
        ref: 'User',
    }
},
{
    timestamps: true,
});

mongoose.models = {}; // this is required to avoid overwriting models already declared

export const Task = mongoose.model('Task', schema);