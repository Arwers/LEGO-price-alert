// Express web framework
const express = require('express');

// CORS - Cross Origin Resource Sharing
const cors = require('cors');

// declare our app to use express
const app = express();
app.use(express.json());

const legoSets = [];

//var jsonContent = JSON.parse(contents);

app.use(cors());
 
app.post('/api/v1/legoSetId', (req, res) => {
    const legoSet = {
        legoSetId: req.body.legoSetId,
    };
    legoSets.push(legoSet);
    res.send(`Lego Set ID: ${legoSet.legoSetId} is priced at $100.00`);
});

// Environment variable for port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));