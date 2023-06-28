const express = require('express')
const app = express()
const port = 3001
const dataBase = require('./db')
const cors = require('cors')

app.use(cors());



app.get('/usuarios', (req, res) => {
 res.status(200).json(dataBase);
})


app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params
    const usuario = dataBase.find(objeto => objeto.id === parseInt(id));

    if(!usuario) {
        res.status(404).json({message: 'Usuario no encontrado'})
    } else {
        res.status(200).json(usuario);
    }
})

app.listen(port, () => {
  console.log(`Escuchando en el puerto: ${port} 🚀 `)
})