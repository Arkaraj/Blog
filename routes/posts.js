const express = require('express');
const Article = require('../models/articles'); //

const router = express.Router();

router.get('/new', (req, res) => {
    res.render('./posts/new', { article: new Article() })
});

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('posts/edit', { article: article })
});

router.get('/:slug', async (req, res) => {

    const article = await Article.findOne({ slug: req.params.slug })
    if (article == null) res.redirect('/')
    res.render('posts/show', { article: article })

});

router.post('/', async (req, res) => {
    const { title, image, description, content } = req.body;
    let article = new Article({
        title,
        image,
        description,
        markdown: content,
        // tags: ["tech", "testing", "sports"], always do everything in lowercase
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
    const { title, image, description, content } = req.body;
    let article = await Article.findById(req.params.id);
    article.title = title;
    article.image = image;
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