import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    }
})

export const User = mongoose.model('user', UserSchema)