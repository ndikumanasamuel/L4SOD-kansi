const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
        Muhire Aime Christian<br>
        Ibyimanikora Rachel<br>
        Mugisha Damien<br>
        Mugisha Emanuel<br>
        Mutagoma Augustin<br>
        Cyiza Marrie Clare
    `);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});