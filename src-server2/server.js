import express from 'express';
import cymulateSettings from './controllers/cymulateController.js'
import axios from "axios";
import {encrypt, decrypt} from "./crypto.js";

const app = express();

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/rfc', async (req, res) => {
    let decryptedData = JSON.parse(decrypt(req.body));

    let returnData = {};

    switch (decryptedData.action) {
        case 'get':
            returnData = await cymulateSettings.getCymulateSettings(decryptedData);
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        case 'create':
            returnData = [await cymulateSettings.createCymulateSettings(decryptedData)];
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        case 'update':
            returnData = [await cymulateSettings.updateCymulateSettings(decryptedData)];
            // encrypt(JSON.stringify(returnData));
            await res.json(encrypt(JSON.stringify(returnData)));
            break;
        case 'delete':
            returnData = [await cymulateSettings.deleteCymulateSettings(decryptedData)];
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

