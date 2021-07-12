const mongoose = require('mongoose')

if (process.argv.length == 5) {
    console.log('Give data with passwprd')
    const password = process.argv[2]
    const name = process.argv[3]
    const number = process.argv[4]
    const url = `mongodb+srv://fullstack:${password}@cluster0.pofk2.mongodb.net/personDb?retryWrites=true&w=majority`
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    // Schema define
    const personSchema = new mongoose.Schema({
        name: String,
        number: String,
        date: Date,
    })

    const Person = mongoose.model('Person', personSchema)

    const person = new Person({
        name: name,
        number: number,
        date: new Date()
    })

    person.save().then(result => {
        console.log(`Added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}

else if (process.argv.length == 3) {
    const password = process.argv[2]
    const url = `mongodb+srv://fullstack:${password}@cluster0.pofk2.mongodb.net/personDb?retryWrites=true&w=majority`
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    const personSchema = new mongoose.Schema({
        name: String,
        number: String,
        date: Date,
    })

    const Person = mongoose.model('Person', personSchema)
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}


