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
        console.log(response.body);
        expect(response.statusCode).toBe(200);
    })

    it('POST request', async () => {
        const payload = {
            title: "Demo title",
            body: "Demo body",
            userId: 1
        }
        const response = await request
            .post('/posts')
            .send(payload);
        console.log(response.body);
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe(payload.title);
    })

    it('PUT request', async () => {
        const payload = {
            title: "Demo title updated",
            body: "Demo body updated",
            userId: 3
        }
        const getResponse = await request.get('/posts/1');
        const beforeTitle = getResponse.body.title
        const response = await request
            .put('/posts/1')
            .send(payload);
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(payload.title);
        expect(response.body.title).not.toBe(beforeTitle);
    })

    it('PATCH request', async () => {
        const payload = {
            title: "Demo title updated",
        }
        const getResponse = await request.get('/posts/1');
        const beforeTitle = getResponse.body.title
        const response = await request
            .patch('/posts/1')
            .send(payload);
        console.log(response.body);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe(payload.title);
        expect(response.body.title).not.toBe(beforeTitle);
    })

    it.only('DELETE request', async () => {
        const response = await request.delete('/posts/1');
        console.log(response.body);
        expect(response.statusCode).toBe(200);
    })
})