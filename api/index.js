const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

mongoose.connect('mongodb+srv://pavithra:pavi@cluster0.r1waizr.mongodb.net/one')
  .then(() => console.log("Database Connected"))
  .catch((error) => console.log("Error in DB Connection", error));

module.exports = app;
