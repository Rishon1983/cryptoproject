import express from 'express';
import mongoose from "mongoose";
import cymulateSettings from './controllers/cymulateController.js'
import axios from "axios";
import {encrypt, decrypt} from "./crypto.js";

const app = express();

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mongoose.createConnection('mongodb://localhost:27017/cymulate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.post('/rfc', async (req, res) => {
    let decryptedData = JSON.parse(decrypt(req.body));

    let returnData = {};

    switch (decryptedData.action) {
        case 'get':
            returnData = await cymulateSettings.getCymulateSettings(connection, decryptedData);
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        case 'create':
            returnData = [await cymulateSettings.createCymulateSettings(connection, decryptedData)];
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        case 'update':
            returnData = [await cymulateSettings.updateCymulateSettings(connection, decryptedData)];
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        case 'delete':
            returnData = [await cymulateSettings.deleteCymulateSettings(connection, decryptedData)];
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        default:
            console.log('Problem with req.body.action')
    }
});

app.listen(3000, () => {
    console.log('Second Server started ');
});

