const express = require("express")
const bodyParser = require("body-parser")

//Appel du module yargs
const argv = require('yargs').argv;
const command = process.argv[2];

//Constante du port
const port = 3000;

//Appel du fichier route avec toutes les requêtes
const {
    app
} = require('./routes');

// lancement du serveur
app.listen(port);
console.log('API was launched on port ' + port);

app.use(express.static(__dirname + '/Site web'));
app.use(bodyParser.json());

app.set('views', __dirname + '/Site web');
app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
    res.render('index', {
        url: 'http://localhost:3000/'
    });
});

app.get('/list', (req, res) => {
    res.render('list', {
        url: 'http://localhost:3000/list/'
    });
});

app.get('/add', (req, res) => {
    res.render('add', {
        url: 'http://localhost:3000/add/'
    });
});

app.get('/modify', (req, res) => {
    res.render('modify', {
        url: 'http://localhost:3000/modify/'
    });
});
