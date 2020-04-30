import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {type: String, unique: true, require: true, default: ''},
    password: {type: String, require: true, default: ''}
});

const loginCheck = async (connection, data) => {

    const User = connection.model('users', usersSchema);
    return User.findOne({username: data.username, password: data.password});
}

export {
    loginCheck
}