const request = require('supertest');
const app = require('./app'); // Import the Express app
const Demande = require('./models/demande');
const mongoose = require('mongoose');

// const { postDemande, getAllDemande} = require('./app');


// test pour faire une demande
it('should create a new demande', async () => {
    const res = await request(app)
      .post('/demande')
      .send({
        token: 'Z6tDn1Ixo2SoOdxyxNEOuykn1heFNhdy',
        demandeur: 'pierre',
        possesseur: 'Marie',
        type: { troc: true, objetPropose: ['tableau'] },
        message: 'je souhaite faire un troc',
        item: new mongoose.Types.ObjectId("671fb98fe3a8ffe9c0ea2697")
      });
    expect(res.statusCode).toEqual(200);                      // vérification du statut http
    console.log(res.body)
    expect(res.body).toHaveProperty('result', true);          // vérification de la réponse
  });


  // Test pour récupérer toutes les demandes
  it('should get all demandes', async () => {
    const res = await request(app)
      .get('/demande');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });