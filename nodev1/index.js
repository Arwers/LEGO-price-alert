// Express web framework
const express = require('express');

// CORS - Cross Origin Resource Sharing
const cors = require('cors');

// declare our app to use express
const app = express();
app.use(express.json());