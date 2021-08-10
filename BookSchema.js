'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./BookModel');

const userDB = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});
const books = mongoose.model('books', bookSchema);

function abdelqader() {
    const SevenHabits = new books({
        title: 'In Search of Lost Time',
        description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. ",
        status: 'Active'
    })
    const CreateYourFuture = new books({
        title: 'The Push: A Novel',
        description: "Fans of psychological thrillers, crack open this one about the relationship between mothers and daughters. Before Blythe's daughter is born, she wants to create the deep bond she never had with her own mom.",
        status: 'Finish'
    })
    const CodingInterview = new books({
        title: 'Life Among the Terranauts',
        description: 'In a series of vivid, immersive short stories, we meet characters living in ever-so-slightly fanciful realities and others navigating deeply human experiences that could be ripped from our own lives. ',
        status: 'Active',
    })
    const user = new books({
        email: 'rahafjazz@gmail.com',
    })
    user.save();
    SevenHabits.save();
    CreateYourFuture.save();
    CodingInterview.save();
}
abdelqader();

module.exports = books;