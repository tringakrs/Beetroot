const express = require('express');
const Person = require('./person');

const app = express();
app.use(express.json());

// Create some initial people
const people = [
  new Person(1, 'Artina', 22),
  new Person(2, 'Endrit', 22),
  new Person(3, 'Arianit', 18),
];

//Validimi
function validatePerson(req, res, next) {
    const { name, age } = req.body;
    if (!name || !age) {
    return res.status(400).send('Name and age are required');
    }
    if (typeof name !== 'string' || typeof age !== 'number') {
    return res.status(400).send('Name must be a string and age must be a number');
    }
    next();
    }

// GET all people
app.get('/people', (req, res) => {
  return res.json(people);
});

// GET a specific person by ID
app.get('/people/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const person = people.find(p => p.id === id);
  if (!person) {
    return res.status(404).json({ error: `Person with ID ${id} not found` });
  }
  return res.json(person);
});

// CREATE a new person
app.post('/people',  validatePerson,(req, res) => {
    const { name, age } = req.body;
  
    // Check that name is present and is a string
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ error: 'Name is required and must be a string' });
    }
  
    const id = people.length + 1;
    const person = new Person(id, name, age);
    people.push(person);
    return res.json(person);
  });
  
  

// UPDATE a person by ID
app.put("/people/:id",  validatePerson,(req, res) => {
    const { name,age } = req.body;
    const id = parseInt(req.params.id);
    const person = people.find(p => p.id === id);
    person.name=name;
    person.age=age;
    return res.json(person);
  });

// DELETE a person by ID
app.delete("/people/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = people.findIndex(p => p.id === id);
    people.splice(index, 1);
    return res.send();
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
