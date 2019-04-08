const mongoose = require('../db');

const modelList = mongoose.model('list', {
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
        type: Number
    },
    mail: {
        type: String
    }
});

module.exports = modelList