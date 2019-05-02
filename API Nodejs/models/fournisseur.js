const mongoose = require('../db');

const modelFournisseur = mongoose.model('table_fournisseur', {
    name: {
        type: String
    },
    description: {
        type: String
    },
    adresse: {
        type: Array
    },
    telephone: {
        type: Number
    },
    mail: {
        type: String
    }
});

module.exports = modelFournisseur