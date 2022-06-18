const supertest = require('supertest');
const request = supertest('http://localhost:3000');

describe('Express Route Test', function () {
	it('should return hello world', async () => {
		return request.get('/hello')
			.expect(200)
			.expect('Content-Type', /text/)
			.then(res => {
				expect(res.text).toBe('Hello BENR2423');
			});
	})

	it('login admin successfully', async () => {
		return request
			.post('/login/admin')
			.send({id: 'eizaz', password: "eizaz" })
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
                        _id: expect.any(String),
                        id: expect.any(String),
                        name: expect.any(String),
                        division: expect.any(String),
                        token: expect.any(String),
					})
				);
			});
	});

	it('login staff successfully', async () => {
		return request
			.post('/login/staff')
			.send({id: 'eizaz', password: "eizaz" })
			.expect('Content-Type', /json/)
			.expect(200).then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
                        _id: expect.any(String),
                        id: expect.any(String),
                        name: expect.any(String),
                        division: expect.any(String),
					})
				);
			});
	});

	it('login failed', async () => {
		
	})

	it('register admin', async () => {
		return request
		.post('/register/admin')
		.send({
			id:"eizaz",
			password:"eizaz",
			name:"Nur Eizaz",
			division:"IT",
			rank:"Senior Manager",
			phone:"0123456789",
			role:"Admin" })
		.expect('Content-Type', /json/)
		.expect(200).then(response => {
			expect(response.body).not.toEqual(
				expect.objectContaining({
					insertedId: expect.any(String),
				})
			);
		});
	});

	it('register admin', async () => {
		return request
		.post('/register/staff')
		.send({
			id:"farina",
			password:"farina",
			name:"Nurul Farina",
			division:"Human Resource",
			rank:"Executive",
			phone:"0123456781" })
		.expect('Content-Type', /json/)
		.expect(200).then(response => {
			expect(response.body).not.toEqual(
				expect.objectContaining({
					insertedId: expect.any(String),
				})
			);
		});
	});

	it('register failed', async () => {
	})

	test('should run', () => {
	});
 });