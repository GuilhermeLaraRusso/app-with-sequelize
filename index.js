const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))