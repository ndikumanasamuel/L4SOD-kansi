const express = require('express');
const app = express();
const port = 8080;

const classmates = [
  'MUGISHA DAMIEN',
  'BWABONIMANA MUTAGOMA AUGUSTIN',
  'MUGISHA EMMANUEL',
  'IZIKITEGANYA JEAN PIERE',
  'NIYONKURU INNOCENT',
  'MUHIRE AIME CHRISTIAN',
  'MUSABYISONI OLIVE',
  'CYIZA MARIE CLAIRE',
  'MUKASANGWA LILIANE',
  'IBYIMANIKORA RACHEL'
];


app.get('/classmates', (req, res) => {
  res.json(classmates);
});


app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Classmates List</h1>');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${8080}`);
});
