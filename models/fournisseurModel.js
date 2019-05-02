// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Création d'un modèle dans la base de donnée
const Fournisseur = mongoose.model('Fournisseur', {
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    adresse: {
        type: String,
        require: true
    },
    telephone: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true
    }
});

// Exportation d'un modèle
module.exports = { Fournisseur };