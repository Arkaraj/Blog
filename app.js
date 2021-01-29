const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const postRouter = require('./routes/posts')
const methodOverride = require('method-override');

const Article = require('./models/articles');

const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/posts', postRouter)

mongoose.connect(`${process.env.URI}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () => {
    console.log('Successfully connected to Database!!');
});

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', async (req, res) => {

    const posts = await Article.find().sort({
        date: 'desc'
    });
    // const posts = [{
    //     title: 'How to setup a Blog Anyways ✍️',
    //     time: new Date(),
    //     description: 'This is a dummy description to briefly explain how to setup a blog with node backend and express routing, Frontend ejs and tailwind css'
    // }];

    res.render('index', { posts: posts })
});


app.listen(port, () => {
    console.log(`Listening at port:${port} 🚀`);
})