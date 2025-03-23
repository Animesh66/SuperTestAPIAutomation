import * as supertest from 'supertest';

const request = supertest('https://practice-react.sdetunicorns.com/api/test');

describe('Brands API requests', () => {
    it('GET request', async () => {
        const response = await request.get('/brands');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(1);
        expect(Object.keys(response.body[0])).toEqual(['_id', 'name']);
    })
})