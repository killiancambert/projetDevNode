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
