import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersLogSchema = new Schema({
    userId: {type: String, require: true, default: ''},
    CT: {type: Date, require: true, default: new Date()},
    UT: {type: Date, require: true, default: new Date()}
});

mongoose.model('users', usersLogSchema);