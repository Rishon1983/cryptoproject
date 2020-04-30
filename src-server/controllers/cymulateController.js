import axios from 'axios';
import {loginCheck} from '../models/users.js'
import {logsAction} from '../models/logs.js'
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

const sendDataToServer2 = async (data) => {
// const sendDataToServer2 = async (action, value = null) => {
    //passport.js JWT

    // const data = {
    //     action,
    //     value
    // };
    // const encryptedData = encryptIt(data);
    // const encryptedData = encrypt(JSON.stringify(data));
    // const result = await axios.post('http://localhost:3000/rfc', encryptedData);


    // console.log(data);
    // const result =  await axios.post('http://localhost:3000/rfc', data);
    // return result;


    let result = {};

    await axios.post('http://localhost:3000/rfc', data)
        .then((response) => {
            result = response.data;
        })
        .catch((error) => {
            console.log(error);
        });

    return result;

    // axios.post('http://localhost:3000/rfc', data).then(res => {
    //     console.log(res);
    //     return res;
    // })

    // const decryptedData = decrypt(result);
    // return (JSON.parse(decryptedData));
}

const cymulateSettings = async (req, res) => {
    console.log('cymulateSettings');

    jwt.verify(req.token, 'secretkey', async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const data = req.body;
            const settingsArray = await sendDataToServer2(data);

            //create connection
            const connection = mongoose.createConnection('mongodb://localhost:27017/cymulate', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
            logsAction(connection, req.body);
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

    //create connection
    const connection = mongoose.createConnection('mongodb://localhost:27017/cymulate', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    const userData = await loginCheck(connection, data);

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