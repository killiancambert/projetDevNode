// Appel du module mongoose pour permettre la connexion à la bdd
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mmongodb+srv://admin:admin@cluster0-zd8v6.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
// Export du module mongoose
module.exports = { mongoose }