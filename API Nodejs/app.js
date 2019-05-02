// const port = process.env.PORT || 4000;

// Yargs -----------------------------------------------------------------------------------------------------------
const yargs = require('yargs');
const url = yargs.argv.url || 'http://localhost:4000/';
const inputport = yargs.argv.port || process.env.PORT || 4000
const port = (inputport && !isNaN(inputport) && (inputport > 0 && inputport % 1 == 0)) ? inputport : 4000;

if (/^(http[s]?:\/\/[^\/]+\/([^\s]+[^,.?!:;])?)/.test(url)) {
    console.log('\x1b[32m%s\x1b[0m', 'URL is correct 👍');
} else {
    console.log('\x1b[31m%s\x1b[0m', 'URL is incorrect  ⚠️');
}

// Express Server --------------------------------------------------------------------------------------------------
const express = require("express");
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");

// Models ----------------------------------------------------------------------------------------------------------
const {
    modelFournisseur
} = require("./models/models");

// Methode ---------------------------------------------------------------------------------------------------------
const {
    getAll,
    getId,
    deleteId,
    putId
} = require("./methods");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// Home page
app.get('/', (req, res) => {
    res.render('index', {
        url: url
    });
});

// Methods for Fournisseur tables -------------------------------------------------------------------------------------

/**
 * GET All method Fournisseur
 */
app.get(`/fournisseur`, (req, res) => {
    getAll(modelFournisseur, res);
});

/**
 * GET by Number method Fournisseur
 */
app.get("/fournisseur/:number", (req, res) => {
    getId(req.params.number, modelFournisseur).then((fournisseur) => {
        res.json(fournisseur);
    }).catch((err) => {
        res.status(204).send(err);
    });
});

/**
 * POST method Fournisseur
 */
app.post("/fournisseur", (req, res) => {
    getId(req.body.number, modelFournisseur).then((fournisseur) => {
        if (fournisseur === null) {
            new modelFournisseur({
                name: req.body.name,
                description: req.body.description,
                adresse: req.body.adresse,
                telephone: req.body.telephone,
                mail: req.body.mail,
            }).save().then(fournisseur => {
                res.status(201).send(fournisseur);
                console.log('Post Fournisseur:\n', fournisseur);
            }).catch(err => {
                res.status(500).send(err);
            });
        } else res.status(400).send(err);
    }).catch(err => {
        res.status(400).send(err);
    });
});

/**
 * DELETE method Fournisseur
 */
app.delete("/fournisseur/:number", (req, res) => {
    deleteId(req.params.number, modelFournisseur, res);
});

/**
 * PUT method Fournisseur
 */
app.put("/fournisseur/:number", (req, res) => {
    putId(req.params.number, modelFournisseur, res, req);
});