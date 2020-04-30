import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {type: String, unique: true, require: true, default: ''},
    password: {type: String, require: true, default: ''}
});

const getConnection = () => {
    return mongoose.createConnection('mongodb://localhost:27017/cymulate', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
};

const loginCheck = async (data) => {

    const User = getConnection().model('users', usersSchema);
    return User.findOne({username: data.username, password: data.password});
}

export {
    loginCheck
}