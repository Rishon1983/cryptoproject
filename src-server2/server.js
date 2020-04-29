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

    const settingsArray = await cymulateSettings.getCymulateSettings(connection, req);
    await res.json(settingsArray);

    // switch (req.body.data.action) {
    //     case 'get':
    //         res.json(cymulateSettings.getCymulateSettings(connection));
    //         break;
    //     case 'create':
    //         // res.json(createDataController(connection, req.body.data));
    //         break;
    //     case 'update':
    //         // res.json(updateDataController(connection, req.body.data));
    //         break;
    //     case 'delete':
    //         // res.json(deleteDataController(connection, req.body.data));
    //         break;
    //     default: console.log('Problem with req.body.data')
    // }
});

app.listen(3000, () => {
    console.log('Second Server started ');
});

