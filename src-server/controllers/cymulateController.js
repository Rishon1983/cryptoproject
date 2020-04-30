import axios from 'axios';
import {loginCheck} from '../models/users.js'
import {logsAction} from '../models/logs.js'
import jwt from 'jsonwebtoken';
import {encrypt, decrypt} from '../crypto.js'

const sendDataToServer2 = async (data) => {

    let result = {};

    await axios.post('http://localhost:3000/rfc', data)
        .then((response) => {
            // decrypt(response.data)
            result = JSON.parse(decrypt(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

    return result;

}

const cymulateSettings = async (req, res) => {
    console.log('cymulateSettings');

    jwt.verify(req.token, 'secretkey', async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {

            //encrypt data
            const encryptedData = encrypt(JSON.stringify(req.body));

            const settingsArray = await sendDataToServer2(encryptedData);

            logsAction(req.body);
            await res.json({
                ok: true,
                result: {
                    settingsArray: settingsArray,
                    authData
                },
                errMsg: ''
            });
        }
    })
};

const verifyToken = (req, res, next) => {
    /*
        Get auth header value
    */
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {

        /*
                format token because Bearer <access_token>
        */
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];
        /*
                Next middlewere
        */
        next();
    } else {
        //Forbidden
        res.sendStatus(403);
    }
}

const login = async (req, res) => {
    const data = req.body;

    const userData = await loginCheck(data);

    let token = '';

    if (userData) {
        /*
                for test
        */
        /*
                token = await jwt.sign({userData}, 'secretkey', { expiresIn: '30s' });
        */
        token = await jwt.sign({userData}, 'secretkey', {expiresIn: '1d'});
    }

    await res.json({
        ok: true,
        result: {
            login: userData,
            token
        },
        errMsg: ''
    });
}

export default {
    cymulateSettings,
    login,
    verifyToken
};