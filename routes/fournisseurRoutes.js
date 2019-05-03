// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Appel du module objectId de mongoose
const ObjectID = mongoose.Types.ObjectId;

//Appel du modèle fournisseur
const { Fournisseur } = require('../models/fournisseurModel');

// Méthode post pour le modèle fournisseur
const fournisseurPost = (req, res) => {
    const newFournisseur =
        new Fournisseur({
            name: req.body.name,
            description: req.body.description,
            adresse: req.body.adresse,
            telephone: req.body.telephone,
            mail: req.body.mail
        });
    newFournisseur.save().then(fournisseur => res.json(fournisseur)).catch(err => res.status(500).send(err));
}

// Méthode get pour le modèle fournisseur
const fournisseurGet = (req, res) => Fournisseur.find().then(listFournisseur => { res.json(listFournisseur) }, err => res.status(500).send(err))

// Méthode getbyid pour le modèle fournisseur
const fournisseurGetbyId = (req, res) => {
    const {
        id
    } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Fournisseur.findById(id).then(fournisseur => {
            if (!fournisseur) {
                res.status(404).send();
            } else {
                res.send(fournisseur);
            }
        }).catch(err => {
            res.status(500).send(err);
        });
    }
}

// Méthode delete pour le modèle fournisseur
const fournisseurDelete = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Fournisseur.findByIdAndDelete(id).then(fournisseur => {
            if (!fournisseur) {
                res.status(404).send();
            } else {
                res.send(fournisseur);
            }
        }).catch(err => res.status(500).send(err));
    }
}

// Méthode put pour le modèle fournisseur
const fournisseurPut = (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Fournisseur.findByIdAndUpdate(id, { $set: req.body }).then(fournisseur => {
            if (!fournisseur) {
                res.status(404).send();
            } else {
                res.json(fournisseur).send();
            }
        }).catch(err => res.status(500).send(err));
    }
}

//Exportations des constantes
module.exports = { fournisseurPost, fournisseurGet, fournisseurGetbyId, fournisseurDelete, fournisseurPut };