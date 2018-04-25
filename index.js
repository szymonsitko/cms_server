import express from 'express';
import blockRouter from './src/routes/block';

const app = express();

app.use('/', blockRouter);

app.get('*', (req, res) => {
    res
        .status(404)
        .send({ error: 'Requested endpoint is not defined.'});
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});