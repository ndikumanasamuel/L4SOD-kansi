<php>
    <head>
        <title>MY CLASS</title>
        </head>
        <body>
            <h1>MY CLASS MATE</h1>
const express = require('express');
const app = express();
const PORT = 3000;

const classmates = [
    "Innocent Niyonkuru",
    "Emmanuel Mugisha",
    "Jeanpierre Izikiteganya",
    "Aime Christian Muhire",
    "Augiste Bwabonimana",
    "Damianne Mugisha",
    "Marie Claire Cyiza",
    "Rachel Ibyimanikora",
    "Olive Musabyisoni",
    "Djamillah Mukasangwa"
];

app.get('/classmates', (req, res) => {
    res.json({ classmates });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
</body>
</php>