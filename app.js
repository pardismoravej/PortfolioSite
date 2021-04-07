const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/portfolio', (req, res) => {
    res.render('portfolio');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})


const port = 3000;
app.listen(port, () => {
    console.log(`SERVING ON PORT 3000`)
})