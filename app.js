const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
    res.json({message: "Hello world", author:"Srirag"})
})

app.listen(process.env.PORT, () => console.log(`Server started at http://localhost:${process.env.PORT}`))