const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const url = require('url');
const path = require('path');
const pageRouter = require('./routes/pageRouters');

// dotenv config
dotenv.config();

// init port

const port = process.env.PORT || 7000;

// init expres
const app = express();

// use app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.use(pageRouter);

app.listen(port, () => {
  console.log(`server is running port ${port}`.bgMagenta);
});
