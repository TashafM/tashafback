import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    }
},{
    timestamps:true
})

export const Post = mongoose.model("post", PostSchema)