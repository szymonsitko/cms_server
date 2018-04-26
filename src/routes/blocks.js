import express from 'express';
import Block from '../models/block';

import * as errors from '../constants/errors';
import * as mocks from '../constants/mocks';

let blocksRouter = express.Router();

blocksRouter.get('/blocks', (req, res) => {
    Block.find({}, (err, blocks) => {
        res
            .status(200)
            .send(blocks)
            .end();
    })
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



