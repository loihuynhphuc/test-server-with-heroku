const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: {
        type: String
    },
    year: {
        type: Number
    },
    book: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
    
})

const bookSchema = new mongoose.Schema({
    name: {type: String,require: true},
    publishedDate: {type: String,},
    genres: [String],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
})

let book = mongoose.model("Book",bookSchema);
let author = mongoose.model("Author",authorSchema);

module.exports = {book,author};
