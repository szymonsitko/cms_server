import express from 'express';
import blocksRouter from './src/routes/blocks';

const app = express();

app.use('/', blocksRouter);

app.get('*', (req, res) => {
    res
        .status(404)
        .send({ error: 'Requested endpoint is not defined.'});
});

app.post('*', (req, res) => {
    res
        .status(404)
        .send({ error: 'Requested endpoint is not defined.'});
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});