const request = require('supertest')
const app = require('../server.js')

describe("GET/iecho",()=>{
    it('deberia responder con status 200 cuando text es string', done =>{
        request(app).get('/iecho?text=hola')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200, done)
    })
    it('deberia responder el texto "hola" invertido y palindrome en false', done =>{
        request(app).get('/iecho?text=hola')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200)
        .expect('{"text":"aloh","palindrome":false}')
        .end(done)
    
    })
    it('deberia responder el texto "Ana" invertido y palindrome en true', done =>{
        request(app).get('/iecho?text=Ana')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200)
        .expect('{"text":"anA","palindrome":true}')
        .end(done)
    
    })
    it('deberia responder con status 400 cuando text es un numero', done =>{
        request(app).get('/iecho?text=111')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(400, done)
    })
})
