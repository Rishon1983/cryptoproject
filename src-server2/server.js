import express from 'express';
import mongoose from "mongoose";
import cymulateSettings from './controllers/cymulateController.js'
import axios from "axios";
// import {encrypt, decrypt} from 'crypto.mjs'

const app = express();

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const connection = mongoose.createConnection('mongodb://localhost:27017/cymulate', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/rfc', async (req, res) => {
    // const decryptedData = dencryptIt(req.body.data);

    switch (req.body.action) {
        case 'get':
            await res.json(await cymulateSettings.getCymulateSettings(connection, req.body));
            break;
        case 'create':
            await res.json([await cymulateSettings.createCymulateSettings(connection, req.body)]);
            break;
        case 'update':
            await res.json([await cymulateSettings.updateCymulateSettings(connection, req.body)]);
            break;
        case 'delete':
            await res.json([await cymulateSettings.deleteCymulateSettings(connection, req.body)]);
            break;
        default:
            console.log('Problem with req.body.action')
    }
});

app.listen(3000, () => {
    console.log('Second Server started ');
});

