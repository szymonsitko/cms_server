const request = require('request');
const baseURL = "https://localhost:3000";

describe('Testing suite for server responses', () => {
    it('Should respond with status 200 when hitting /block route on GET', done => {
        request({
            method: 'GET',
            uri: 'http://localhost:3000/blocks'
        }, function (error, response, body) {
            expect(response.statusCode).toEqual(200);
            expect(JSON.parse(body)).toContain({id:1, name: 'Image Block', content:'<div></div>'})

            done();
        });
    });

    it('Should send back random data when 404 encountered', done => {
        request('http://localhost:3000/non_existent', function (error, response, body) {
            expect(response.statusCode).toEqual(404);
            expect(JSON.parse(response.body)).toEqual({ error: 'Requested endpoint is not defined.'});

            done();
        });
    });
})