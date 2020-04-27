import express from 'express';
import path from 'path';
import axios from 'axios';
// import {encrypt, decrypt} from 'crypto.mjs'

const app = express();
const __dirname = path.resolve();
const publicDir = path.join(__dirname, '../dist');

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

app.use(express.static(publicDir));
app.use(express.urlencoded({extended: true}));

app.get('/*', function (req, res) {
    res.sendfile('index.html', { root: publicDir} );
});

app.listen(80, () => {
    console.log('Main Server started ');
});

