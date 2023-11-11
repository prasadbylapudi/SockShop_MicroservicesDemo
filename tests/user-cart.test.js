const axios = require('axios');

// describe('Integration Tests for /register', () => {
//   test('POST /register - Successful registration', async () => {
//     const userData = {
//       username: 'gary2',
//       password: 'gary2',
//       email: 'gary2@gmail.com', 
//     };

//     const response = await axios.post("http://host.docker.internal/register", userData);
//     expect(response.data).toHaveProperty('id');

//   });
// });

describe('Integration Tests for /customers', () => {
  test('GET /customers - Valid response', async () => {
    const response = await axios.get("http://host.docker.internal/customers");

    expect(response.status).toBe(200);
  });
});


describe('Integration Tests for /customers/{id}', () => {
  test('GET /customers/{id} - Check user properties', async () => {
    const userId = '57a98d98e4b00679b4a830b5';

    const response = await axios.get(`http://host.docker.internal/customers/${userId}`);

    expect(response.status).toBe(200);
  });
});


// describe('Integration Tests for /orders', () => {
//   test('GET /orders - User not logged in', async () => {

//     const response = await axios.get('http://host.docker.internal/orders');
//     // expect(response.status).toBe(401); 
//     expect(response.data).toHaveProperty('message', 'User not logged in.');
//     // expect(responseData).toHaveProperty('error', expect.any(Object));
//   });
// });

describe('Integration Tests for /catalogue', () => {
  test('GET /catalogue - Check response status', async () => {
    try {
      const response = await axios.get('http://host.docker.internal/catalogue');

      // Assuming a successful response
      expect(response.status).toBe(200);
    } catch (error) {
      // If the request fails, the test should fail
      expect(error.response.status).toBeUndefined();
    }
  });
});

describe('Integration Tests for /catalogue/{id}', () => {
  test('GET /catalogue/{id} - Check response status', async () => {
    const itemId = 'a0a4f044-b040-410d-8ead-4de0446aec7e'; 
    try {
      const response = await axios.get(`http://host.docker.internal/catalogue/${itemId}`);
      expect(response.status).toBe(200);
    } catch (error) {
      // If the request fails, the test should fail
      expect(error.response.status).toBeUndefined();
    }
  });
});