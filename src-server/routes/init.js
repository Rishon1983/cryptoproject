import express from 'express';
// import mongoose from 'mongoose';
// import fs from 'fs';
import path from "path";
import CymulateRouter from './cymulateRouter.js';

const __dirname = path.resolve();
const publicDir = path.join(__dirname, '../dist');

const initRoutes = (app) => {
    app.use(express.static(publicDir));
    app.use(express.urlencoded({extended: true}));

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


};

export default initRoutes;