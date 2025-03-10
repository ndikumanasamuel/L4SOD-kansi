// app.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

let classmates = ['Mugisha emmanuel', 'Mugisha damien', 'Mukasagwa liliane', 'Musabyisoni olive', 'Mutagoma augustin', 'ibyimanikora racher', 'Niyonkuru innocent', 'mucyo aime chiristian', 'Izicyiteganya jean pier', ' Cyiza marie claire'];

app.get('/', (req, res) => {
  let classmatesHtml = classmates.map(name => `<li>${name}</li>`).join('');
  
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Classmates List</title>
    </head>
    <body>
      <h1>Classmates List (Top 10)</h1>
      <ul>
        ${classmatesHtml}
      </ul>
      <h2>Add a new classmate:</h2>
      <form action="/add-classmate" method="POST">
        <label for="name">Classmate Name:</label>
        <input type="text" id="name" name="name" required>
        <button type="submit">Add</button>
      </form>
    </body>
    </html>
  `);
});

app.post('/add-classmate', (req, res) => {
  const newClassmate = req.body.name;
  
  if (classmates.length >= 10) {
    classmates.shift(); 
  }
  classmates.push(newClassmate);
  
  res.redirect('/');
});
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
