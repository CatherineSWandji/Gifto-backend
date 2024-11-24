const request = require('supertest');
const app = require('./app'); // Import the Express app
const Categorie = require('./models/categorie');

// Test the GET /categories endpoint with sample data
it('GET /categories - should return all categories', async () => {
  
    const res = await request(app).get('/categories'); // Test for getting all categories
  
    expect(res.statusCode).toBe(200); // Expect HTTP 200 success status
    expect(res.body.result).toBe(true); // Expect a result flag in the response

    expect(Array.isArray(res.body.categories)).toBe(true); // Expect categories to be an array
    
});

  it('GET /categories/:id - should return a specific category by ID', async () => {
    // Insert a single category and get its ID
    const res = await request(app).get(`/categories/672a42499825be8a34229392`); // Test for getting a specific category by ID
    //const res = await request(app).get(`/categories/${category._id}`);


    expect(res.statusCode).toBe(200); 
    expect(res.body.result).toBe(true); 
    expect(res.body.category.categorie).toBe('Vêtements'); // Check if the returned category has the expected name  
});
