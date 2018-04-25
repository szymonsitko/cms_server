const request = require('request');

describe('Testing suite for server responses', () => {
    it('Should respond with status 200 when hitting /block route on GET', done => {
        request
            .get('http://localhost:3000/blocks')
            .on('response', function(response) {
                expect(response.statusCode).toEqual(200);
            })
    })
})