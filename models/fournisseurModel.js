// Appel de la connection à la base de donnée
const { mongoose } = require('../db/database.js');

//Création d'un modèle dans la base de donnée
const Fournisseur = mongoose.model('Fournisseur', {
    name: {
        type: String
    },
    description: {
        type: String
    },
    adresse: {
        type: String
    },
    telephone: {
        type: String
    },
    mail: {
        type: String
    }
});

// Exportation d'un modèle
module.exports = { Fournisseur };