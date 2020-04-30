import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usersLogSchema = new Schema({
    userId: {type: String, require: true, default: ''},
    action: {type: String, require: true, default: ''},
    CT: {type: Date, require: true, default: new Date()},
    UT: {type: Date, require: true, default: new Date()}
});

const logsAction = (connection, data) => {

    console.log('===========>', data)

    const Logs = connection.model('logs', usersLogSchema);
    Logs.create({
        userId: data.userId,
        action: data.action
    });
}


export {
    logsAction
}