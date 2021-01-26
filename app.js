const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

app.use('/posts', express.static(path.join(__dirname, 'Public')));


mongoose.connect(`${process.env.URI}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successfully connected to Database!!');
});

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Blog Post</h1>');
});


app.listen(port, () => {
    console.log(`Listening at port:${port} 🚀`);
})