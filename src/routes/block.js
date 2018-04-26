import express from 'express';
import Block from '../models/block';

import * as mocks from '../constants/mocks';
import * as errors from '../constants/errors';

let blockRouter = express.Router();

blockRouter.post('/block', (req, res, next) => {
    const { name, content } = req.body;

    let block = new Block();
    block.name = name;
    block.content = content;
    
    block.save((err) => {
        if (err) {
            console.log(err);
            return;
        }
        res
            .sendStatus(200)
            .send({hello:'world'})
            .end();

        return;
    });
});

blockRouter.get('/block/:id', (req, res, next) => {
    res
        .sendStatus(200)
        .send(mocks.MOCK.filter(each => Number(req.params.id) === each.id)[0])
        .end();
    
    next();
});

export default blockRouter;
