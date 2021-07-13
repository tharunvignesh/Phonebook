const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static("build"))

morgan.token("body", (req, res) => JSON.stringify(req.body))
app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :body - :req[content-length]"
  )
)
let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
]

app.get("/info", (req, res) => {
  const totalPersons = persons.length
  res.send(`<p>Phonebook has info for ${totalPersons} people</p>`)
})

app.get("/api/persons", (req, res) => {
  res.send(persons)
})

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find((p) => p.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter((p) => p.id !== id)
  console.log(persons)
  res.status(204).end()
})

app.post("/api/persons", (req, res) => {
  const body = req.body
  const personName = persons.some((p) => body.name === p.name)

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: "content missing",
    })
  } else if (personName) {
    return res.status(400).json({
      error: "name must be unique",
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 99999),
  }

  persons = persons.concat(person)
  res.json(person)
})

const PORT = 3001

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
})
