require('dotenv').config();
const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3333;
const hostname = process.env.HOST_NAME;

//ejs
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'ejs')

//static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/hmt', (req, res) => {
    res.render('samples.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})