const express = require("express")
const fs = require("fs")
const server = express()

server.get("/random_name", (req, res) => {
  let person = getRandomPerson()
  res.send({"author" : "Pilar Gomez", "nombre" : person.nombre, "genero" : person.genero})
})

server.listen(3000, () => {
  console.log("Servidor activo en el puerto 3000")
})

function getRandomPerson(){
  let persons = JSON.parse(fs.readFileSync("./data/persons.txt", "utf-8"))
  persons = persons.persons
  let random = Math.floor(Math.random() * (persons.length))
  return persons[random]
}

server.get("/random_lastname", (req, res) => {
  let person = getRandomPerson()
  res.send({"author" : "Pilar Gomez", "apellido" : person.apellido, "genero" : person.genero})
})
