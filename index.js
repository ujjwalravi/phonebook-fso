const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())


morgan.token('logData', function (req) { return JSON.stringify(req.body) })
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :logData"))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send( `<p>Phonebook has entry for ${persons.length} people.</p>
    <p>${date}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person) {
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})

app.post('/api/persons', (request, response) => {
    const newId = Math.floor(Math.random() * 100) + persons.length
    const person = request.body
    person.id = newId

    if(!person.name || !person.number) {
        return response.status(404).send({ error: 'name or number can\'t be empty' })
    }
    const temp = persons.find(p => p.name === person.name)
    if (temp) {
        return response.status(404).send({ error: 'name or must be unique' })
    }
    persons = persons.concat(person)
    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id!==id)
    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})