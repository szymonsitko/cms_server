import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import blocksRouter from './src/routes/blocks';
import blockRouter from './src/routes/block';

mongoose.connect('mongodb://localhost/');

let db = mongoose.connection;

db.once('open', () => {
    console.log(`${new Date().toTimeString()} :: Connection to MongoDB has been established`);
});

db.on('error', err => {
    console.log('Error: ' + err);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', blocksRouter);
app.use('/', blockRouter);

app.get('*', (req, res) => {
    res
        .status(404)
        .send({ error: 'Requested endpoint is not defined.'})
        .end();
});

app.post('*', (req, res) => {
    res
        .status(404)
        .send({ error: 'Requested endpoint is not defined.'})
        .end();
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});