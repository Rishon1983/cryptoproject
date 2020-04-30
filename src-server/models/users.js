import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersLogSchema = new Schema({
    userId: {type: String, require: true, default: ''},
    CT: {type: Date, require: true, default: new Date()},
    UT: {type: Date, require: true, default: new Date()}
});

const usersSchema = new Schema({
    username: {type: String, unique: true, require: true, default: ''},
    password: {type: String, require: true, default: ''}
});

const loginCheck = async (connection, data) => {

    const User = connection.model('users', usersSchema);
    // return User.find({});
    return User.findOne({username: data.username, password: data.password});
}

mongoose.model('users', usersLogSchema);

export {
    loginCheck
}