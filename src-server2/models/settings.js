import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// import {default as mongodb} from 'mongodb';
// let MongoClient = mongodb.MongoClient;

const settingsSchema = new Schema({
    key: {type: String, require: true, default: ''},
    value: {type: Schema.Types.Mixed, require: true, default: {a: {b: {c: "a"}}}}
});

const getAllSettings = async (connection, data) => {

    // return {someData: 'data'}
    // const client = new MongoClient('mongodb://localhost:27017/cymulate');
    // const db = client.connect();
    // db.collection.users.find({}, (err, res) => {
    //     console.log('res', res)
    //     next()
    // });

    // return SettingsDao.find({}, (err,res) =>{
    //     console.log('res', res)
    // });

    // const connection = mongoose.createConnection('mongodb://localhost:27017/cymulate', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // });
    const Settings = connection.model('settings', settingsSchema);
    return Settings.find({});
}

const createSettings = async (connection, data) => {
    const Settings = connection.model('settings', settingsSchema);
    return Settings.create({key: 'settings' + Date.now()});
}

const updateSettings = async (connection, data) => {
    const Settings = connection.model('settings', settingsSchema);
    return Settings.findOneAndUpdate({_id: data.settingsId}, {$set: {key: 'settings' + Date.now()}}, {new: true});
}

const deleteSettings = async (connection, data) => {
    const Settings = connection.model('settings', settingsSchema);
    return Settings.findOneAndDelete({_id: data.settingsId});
}

mongoose.model('settings', settingsSchema);

export {
    getAllSettings,
    createSettings,
    updateSettings,
    deleteSettings
};