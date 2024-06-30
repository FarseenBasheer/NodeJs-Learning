const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URI
const uri = "mongodb://localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// POST /submit route handler (async)
router.post('/submit', async function(req, res) {
  console.log(req.body);

  let client;
  try {
    // Connect to MongoDB asynchronously
    client = await MongoClient.connect(uri);
    console.log('Database connected');
    client.db('sampletest').collection('user').insertOne(req.body);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    res.status(500).send('Error connecting to MongoDB');
    return;
  }

  res.send('Got it');
});

module.exports = router;
