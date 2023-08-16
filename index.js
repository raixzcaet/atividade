const express = require ("express")
const app = express ();
const port = 8080;
const path=  require("path")
const basePath= path.join(__dirname, "templates")

app.get ("/" , (rq, res)  => { 
})
  res.sendFile(`${basePath}/index.html`)

  app.get ("/" , (rq, res)  => { 
})
  res.sendFile(`${basePath}/gato.html`)

app.get ("/" , (rq, res)  => { 
   res. send ("frutas")
})

app.get ("/abacaxi" , (req, res) => {
})

app.get ("/morango" , (req, res) => {
})

app.get ("/kiwi" , (req, res) => {
})

app.get ("/pitaya" , (req, res) => {
})

app.listen (port, () =>{

console.log  (`rodando servidor na porta ${port}`);
})