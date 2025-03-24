import * as supertest from 'supertest';

const request = supertest('https://practice-react.sdetunicorns.com/api/test');

describe('Brands API requests', () => {
    it('GET request', async () => {
        const response = await request.get('/brands');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(1);
        expect(Object.keys(response.body[0])).toEqual(['_id', 'name']);
    })

    it('GET brands/:id', async () => {
        const response = await request.get('/brands/64b8866b49e85607248e2b27');
        expect(response.statusCode).toBe(200);
        expect(response.body._id).toBe('64b8866b49e85607248e2b27');
        expect(response.body.name).toBe('A Plus 2724');
    })

    it('POST request brands', async () => {
        const payload = {
            name: 'Mircimax67657',
            description: 'Micromax products'
        }
        const response = await request.post('/brands').send(payload);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(payload.name);
        expect(response.body.description).toBe(payload.description);
        expect(response.body).toHaveProperty('createdAt');
    })

    it('PUT request', async () => {
        const payload = {
            name: 'Updated using PUT method',
        }
        const response = await request
        .put('/brands/67e1a5c7986188d4dce59845')
        .send(payload)
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(payload.name);
    })

    it('DELETE request', async () => {
        const response = await request.delete('/brands/67e1a5c7986188d4dce59845');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBe(null);
    })
})
