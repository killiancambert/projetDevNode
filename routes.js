//Appel du module express
const express = require('express');

//Appel du module bodyParser
const bodyParser = require('body-parser');

//Appel des constantes afin de créer les requêtes get, put, getbyid, delete et put
const { fournisseurPost, fournisseurGet, fournisseurDelete, fournisseurGetbyId, fournisseurPut } = require('./routes/fournisseurRoutes')
const app = express();
app.use(bodyParser.json());

//Création des requêtes pour tout les modules avec express
app.post('/fournisseur', fournisseurPost);
app.get('/fournisseur', fournisseurGet);
app.delete('/fournisseur/:id', fournisseurDelete);
app.get('/fournisseur/:id', fournisseurGetbyId);
app.put('/fournisseur/:id', fournisseurPut);

//Export de express et de toutes les routes
module.exports = { app };
