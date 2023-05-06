require('dotenv').config();
const express = require('express')

const hbs = require('hbs');
const app = express()
const port = process.env.PORT;


// servir contenido estatENOENTublic'));

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials',function(err){});

app.use(express.static('public'))

app.get('/',  (req, res) =>{
  res.render('home',{
    nombre:'Andres Perez',
    titulo:'Estudiando'
  })
})

app.get('/generic',  (req, res) =>{
  res.render('generic',{
    nombre:'Andres Perez',
    titulo:'Estudiando'
  })
})
app.get('/elements',  (req, res) =>{
  res.render('elements',{
    nombre:'Andres Perez',
    titulo:'Estudiando'
  })
})


app.get('*',  (req, res) =>{
  res.sendFile(__dirname+'/public/404.html');
})

app.listen(port,()=>{
    console.log(`escuchando por el puerto http://localhost:${port}`);
})