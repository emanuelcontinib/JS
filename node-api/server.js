//docker start mongodb
const express  = require ('express')
const mongoose = require ('mongoose')

//Inicianco o app
const app = express ()

//Inciando o DataBase
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  {useNewUrlParser: true}
  )

//Primeira rota
app.get ('/', (req, res) => { 
  res.send ('Olá mundo pelo Express')
  })

