const express = require('express');
const Article = require('../models/articles'); //

const router = express.Router();

router.get('/new', (req, res) => {
    res.render('./posts/new', { article: new Article() })
});

router.get('/:id', async (req, res) => {

    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render('posts/show', { article: article })

    res.send(req.params.id);
});

router.post('/', async (req, res) => {
    const { title, description, content } = req.body;
    let article = new Article({
        title,
        description,
        markdown: content
    })

    try {
        article = await article.save();
        res.redirect(`/posts/${article.id}`)
    } catch (err) {
        console.log(err);
        res.render('/posts/new', { article: article });
    }

});

module.exports = router;