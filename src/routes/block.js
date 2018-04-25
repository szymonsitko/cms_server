import express from 'express';
let blockRouter = express.Router();

blockRouter.get('/blocks', (req, res) => {
    res.status(200).send(
        [
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
    ).end();
});

blockRouter.get('/blocks:id', (req, res) => {
    res.send('ONE').end();
});

export default blockRouter;



