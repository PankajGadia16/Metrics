const mongoose = require('mongoose')
let MetricSchema = new mongoose.Schema({
    counter: String,
    counterDescription: String,
    countValue: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

MetricSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}
MetricSchema.methods.getUserArticle = function (_id) {
    Article.find({ 'author': _id }).then((article) => {
        return article
    })
}
module.exports = mongoose.model('Metric', MetricSchema)