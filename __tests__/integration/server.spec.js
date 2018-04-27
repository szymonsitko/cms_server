const request = require('request');
const baseURL = "https://localhost:3000";

describe('Testing suite for server responses', () => {
    let tempID;

    describe('Block route testing suite', () => {
        it('Should successfully add a new entry when giving "name" and "content" params in body', done => {
            let name = 'Accessible Block';
            let content = '<div class="accessible-block"><p></p></div>';

            request({
                method: 'POST',
                uri: 'http://localhost:3000/block/',
                form: {
                    name: name,
                    content: content
                }
            }, function (error, response, body) {
                let parsedBody = JSON.parse(body);
                tempID = parsedBody._id;
                expect(response.statusCode).toEqual(200);

                expect(parsedBody.name).toEqual(name);
                expect(parsedBody.content).toEqual(content);

                done();
            });
        });

        it('Should return 422 error when object with invalid ID is not found', done => {
            request({
                method: 'GET',
                uri: `http://localhost:3000/block/98ascnas98casn`
            }, function (error, response, body) {
                expect(response.statusCode).toEqual(422);
    
                done();
            });
        });
    })

    describe('Testing "blocks" endpoint', () => {       
        it('Should respond with status 200 when hitting /block route on GET', done => {
            request({
                method: 'GET',
                uri: 'http://localhost:3000/blocks'
            }, function (error, response, body) {
                let firstResult = Object.keys(JSON.parse(body)[0]);

                expect(response.statusCode).toEqual(200);

                expect(firstResult).toContain('_id');
                expect(firstResult).toContain('name');
                expect(firstResult).toContain('content');
                expect(firstResult).toContain('__v');
    
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