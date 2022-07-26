const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get("/iecho",(req, res)=>{
    const {text} = req.query
    //valida si es un numero o un string
    if(!isNaN(parseInt(text))) res.status(400).json({error: "no-text"})
    //invierte el texto
    textReverse = text.split("").reverse().join("")
    //verifica si el texto recibido es un palindromo 
    if(text.toLowerCase() === textReverse.toLowerCase())res.status(200).json({text:textReverse, palindrome: true})
    else res.status(200).json({text:textReverse, palindrome: false})
})

app.listen(process.env.PORT ? process.env.PORT:port,()=>{
    console.log("server iniciado!!")
})

module.exports = app;