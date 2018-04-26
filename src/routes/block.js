import express from 'express';

import * as errors from '../constants/errors';
import * as mocks from '../constants/mocks';

let blockRouter = express.Router();

blockRouter.get('/blocks', (req, res) => {
    res
        .status(200)
        .send(mocks.MOCK)
        .end();
});

blockRouter.get('/blocks/:id', (req, res) => {
    res
        .status(200)
        .send(mocks.MOCK.filter(each => Number(req.params.id) === each.id)[0])
        .end()
});

blockRouter.post('/blocks', (req, res) => {
    res
        .status(405)
        .send(errors.INVALID_METHOD)
        .end();
});

blockRouter.post('/blocks/:id', (req, res) => {
    res
        .status(405)
        .send(errors.INVALID_METHOD)
        .end()
});

export default blockRouter;



