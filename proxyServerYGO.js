const express = require('express');
const axios = require('axios');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/randomcard', async (req, res) => {
  try {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});

app.get('/SearchContainsName', async (req, res) => {
  try {
    const {name} = req.query
    const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener datos');
  }
});



app.listen(5000, () => {
  //console.log('Proxy funcionando en http://localhost:5000');
});
