// Express web framework
const express = require('express');

// CORS - Cross Origin Resource Sharing
const cors = require('cors');

// declare our app to use express
const app = express();
app.use(express.json());

// all lego sets in database
const legoSets = [
    {id: 1, name: 'Lego City', price: 49.99},
    {id: 2, name: 'Lego Star Wars', price: 59.99},
    {id: 3, name: 'Lego Friends', price: 39.99},
    {id: 4, name: 'Lego Technic', price: 79.99},
    {id: 5, name: 'Lego Harry Potter', price: 69.99}
];

app.use(cors());
 
// GET lego price by id
app.get('/v1/legoset/price/:id', (req, res) => {
    const id = req.params.id;
    for (const set of legoSets) {
        if (set.id == id) {
            res.send({id: id, price: set.price});
        }
    }
});

// GET lego name by id
app.get('/v1/legoset/name/:id', (req, res) => {
    const id = req.params.id;
    for (const set of legoSets) {
        if (set.id == id) {
            res.send({id: id, name: set.name});
        }
    }
});

// PATCH lego new price
app.patch('/v1/legoset/price/:id', (req, res) => {
    const id = req.params.id;
    const newPrice = req.body.price;
    for (const set of legoSets) {
        if (set.id == id) {
            set.price = newPrice;
            res.send({id: id, price: newPrice});
        }
    }
});

// Environment variable for port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));