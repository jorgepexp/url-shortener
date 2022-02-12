const express = require('express');

var root = { hello: () => 'Hello world!' };

let app = express();

//Middleware para parsear json y urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => console.log('Port 4000 open. Server listening'));
