const mongoose = require('mongoose');
const marked = require('marked');
const slugify = require('slugify');

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String,
        default: './images/720x400.png'
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    convHtml: {
        type: String,
        required: true
    }

});
// before middleware, function () is used as this keyword won't work for arrow functions
articleSchema.pre('validate', function (next) {
    if (this.title) {
        this.slug = slugify(this.title, { lower: true, strict: true });
    }

    if (this.markdown) {
        this.convHtml = marked(this.markdown);
    }

    next();
})

module.exports = mongoose.model('Article', articleSchema)