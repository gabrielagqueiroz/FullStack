const request = require('supertest');

describe('Teste da API de Bebidas', () => {
    it ('GET /bebidas', () => {    //('Testando o endpoint de buscar bebidas')
        let req = request('http://localhost:8000');

        return req.get('/bebidas').expect(200).then( (response) => {
            expect(typeof response.body).toBe('object');
            
            expect(typeof response.body[0]).toBe('object');

            let bebida1 = response.body[0];

            expect(bebida1.id).not.toBe(undefined);
            expect(typeof bebida1.id).toBe('number');

            expect(bebida1.nome).not.toBe(undefined);
            expect(typeof bebida1.nome).toBe('string');

        });
    });

    
    it ('Inserindo uma bebida', () => {
        let req = request('http://localhost:8000');

        return req.post('/bebidas').expect(201);
    });


    it ('Excluindo uma bebida', () => {
        let req = request('http://localhost:8000');

        return req.delete('/bebidas/123').expect(204);
    });
});