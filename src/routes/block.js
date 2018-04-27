import express from 'express';
import { addBlock, queryBlockById } from '../controllers/block';
import Block from '../controllers/block';

import * as mocks from '../constants/mocks';
import * as errors from '../constants/errors';

let blockRouter = express.Router();

blockRouter.post('/block', (req, res) => {
    const { name, content } = req.body;

    addBlock(name, content, (err, block) => {
        if (err) {
            res
                .status(400)
                .send({ error: err.message })
                .end();
        } else {
            res
                .status(200)
                .send(block)
                .end();
        }
    });
});

blockRouter.get('/block/:id', (req, res) => {
    const { id } = req.params;

    queryBlockById(id, (err, block) => {
        if (err) {
            res
                .status(422)
                .send({ error: err.message })
                .end();
        } else {
            res
                .status(200)
                .send(block)
                .end();
        }
    });
});

blockRouter.post('/block/:id', (req, res) => {
    res
        .status(405)
        .send({ error: 'This method is not allowed under this endpoint' })
        .end();
});

export default blockRouter;
