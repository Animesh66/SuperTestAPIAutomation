import * as supertest from 'supertest';

const request = supertest('https://jsonplaceholder.typicode.com');

describe('POC using supertest', () => {
    it('GET request', async () => {
        const response = await request.get('/posts');
        console.log(response);
        expect(response.statusCode).toBe(200);
        expect(response.body[0].id).toBe(1);
    })

    it('GET request query param', async () => {
        const response = await request
            .get('/comments')
            .query({ postId: 1, limit: 10 });
        console.log(response);
    })
})