const express = require('express');
const Article = require('../models/articles'); //

const router = express.Router();

router.get('/new', (req, res) => {
    res.render('./posts/new', { article: new Article() })
});

router.get('/:slug', async (req, res) => {

    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) res.redirect('/')
    res.render('posts/show', { article: article })

});

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.render('posts/edit', { article: article });
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
        res.redirect(`/posts/${article.slug}`)
    } catch (err) {
        console.log(err);
        res.render('/posts/new', { article: article });
    }

});

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

router.put('/:id', async (req, res) => {
    const { title, description, content } = req.body;
    let article = await Article.findById(req.params.id);
    article.title = title;
    article.description = description;
    article.markdown = content;

    try {
        article = await article.save();
        res.redirect(`/posts/${article.slug}`)
    } catch (err) {
        console.log(err);
        res.render('posts/edit', { article: article });
    }

})

module.exports = router;