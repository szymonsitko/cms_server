const request = require('request');
const baseURL = "https://localhost:3000";

describe('Testing suite for server responses', () => {
    describe('Testing "blocks" endpoint', () => {
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
    })

    describe('Block route testing suite', () => {
        it('Should return requested block by ID', done => {
            request({
                method: 'GET',
                uri: 'http://localhost:3000/block/2'
            }, function (error, response, body) {
                expect(response.statusCode).toEqual(200);
                expect(JSON.parse(body)).toEqual({
                    id: 2,
                    name: 'Heading',
                    content: '<h1></h1>'
                });
    
                done();
            });
        });
    })

    describe('Testing non-existent routes handling on requests', () => {
        it('Should send back generic data when 404 encountered', done => {
            request('http://localhost:3000/non_existent', function (error, response, body) {
                expect(response.statusCode).toEqual(404);
                expect(JSON.parse(response.body)).toEqual({ error: 'Requested endpoint is not defined.'});
    
                done();
            });
        });

        it('Should send "method not allowed" code & error when making invalid request', done => {
            request({
                method: 'POST',
                uri: 'http://localhost:3000/blocks'
            }, function (error, response, body) {
                expect(response.statusCode).toEqual(405);
                expect(JSON.parse(body)).toEqual({ error: 'This method is not allowed under requested endpoint' });
    
                done();
            });
        });
    });


})