const http = require('http');
const express = require('express');

var bodyParser = require('body-parser')

const app = express();

const jsonParser = bodyParser.json();

const server = http.createServer((req, res) => {
    res.end('Hello World !');
});

server.listen(process.env.PORT || 3000); 