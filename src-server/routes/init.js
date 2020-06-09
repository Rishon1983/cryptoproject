import express from 'express';
// import mongoose from 'mongoose';
// import fs from 'fs';
import path from "path";
import CymulateRouter from './cymulateRouter.js';

const __dirname = path.resolve();
const publicDir = path.join(__dirname, '../dist');

const initRoutes = (app) => {
    app.use(express.json());
    app.use(express.static(publicDir));
    app.use(express.urlencoded({extended: true}));

    app.use((req, res, next) => {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', '*');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use(CymulateRouter);

    // const CymulateRouter = CymulateRouter;

    //load all files in models dir
    // fs.readdirSync(__dirname + '/models').forEach(filename => {
    //     if (~filename.indexOf('.js')) {
    //         import (__dirname + '/models' + filename);
    //     }
    // });

    // app.post('/api/v1/getCymulateSettings', (req, res) => {
    //     res.set('Access-Control-Allow-Origin', '*');
    // });

    app.get('/api/*', (req, res) => {
        res.write(`404`);
        res.end();
    });

    app.get('/*', function (req, res) {
        res.sendfile('index.html', {root: publicDir});
    });
};

export default initRoutes;