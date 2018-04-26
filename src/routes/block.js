import express from 'express';

import * as errors from '../constants/errors';

let blockRouter = express.Router();

const mock = [
    {
        id: 1,
        name: 'Image Block',
        content: '<div></div>'
    },
    {
        id: 2,
        name: 'Heading',
        content: '<h1></h1>'
    }
]

blockRouter.get('/blocks', (req, res) => {
    res
        .status(200)
        .send(mock)
        .end();
});

blockRouter.get('/blocks/:id', (req, res) => {
    res
        .status(200)
        .send(mock.filter(each => Number(req.params.id) === each.id)[0])
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



