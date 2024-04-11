const express = require('express');
const hbs = require('express-handlebars');
const path = require('node:path')

const app = express();

require('dotenv').config();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({extname:'hbs', defaultLayout:'main', layoutsDir:__dirname+'/views/layout/', partialsDir:__dirname+'/views/partials/'}));



app.get('/', (req, res) => {
    res.render('home', {desc:"lorem ipsum doler sit amet is a simple dummy text.!"})
})

app.listen(process.env.PORT, () => console.log(`Server started at http://localhost:${process.env.PORT}`))