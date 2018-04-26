import express from 'express';

import * as errors from '../constants/errors';
import * as mocks from '../constants/mocks';

let blocksRouter = express.Router();

blocksRouter.get('/blocks', (req, res) => {
    res
        .status(200)
        .send(mocks.MOCK)
        .end();
});

blocksRouter.get('/blocks/:id', (req, res) => {
    res
        .status(200)
        .send(mocks.MOCK.filter(each => Number(req.params.id) === each.id)[0])
        .end()
});

blocksRouter.post('/blocks', (req, res) => {
    res
        .status(405)
        .send(errors.INVALID_METHOD)
        .end();
});

blocksRouter.post('/blocks/:id', (req, res) => {
    res
        .status(405)
        .send(errors.INVALID_METHOD)
        .end()
});

export default blocksRouter;



