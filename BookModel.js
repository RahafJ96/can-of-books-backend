'use strict';

const mongoose = require('mongoose');
const bookSchema = require('./BookSchema');

const userDB = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema]
});
const bookCollection = mongoose.model('books', userDB);
mongoose.set('useCreateIndex', true);


function seedingData() {
    const rahaf = new bookCollection({
        email: 'rahafjazz@gmail.com',
        books: [{
            title: 'In Search of Lost Time',
            description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work. ",
            status: 'Active',
            img_url:'https://m.media-amazon.com/images/I/411fuVxxG4L.jpg'
        },
        {
            title: 'The Push: A Novel',
            description: "Fans of psychological thrillers, crack open this one about the relationship between mothers and daughters. Before Blythe's daughter is born, she wants to create the deep bond she never had with her own mom.",
            status: 'Finish',
            img_url:'https://images-na.ssl-images-amazon.com/images/I/81BOWe5FzRL.jpg'
        },
        {
            title: 'Life Among the Terranauts',
            description: 'In a series of vivid, immersive short stories, we meet characters living in ever-so-slightly fanciful realities and others navigating deeply human experiences that could be ripped from our own lives. ',
            status: 'Active',
            img_url:'https://images-na.ssl-images-amazon.com/images/I/A1itTjh5bEL.jpg'

        }

        ]
    })

    const abdelqader = new bookCollection({
        email: 'aboud.coding@gmail.com',
        books: [{
            title: 'The 7 Habits of Highly Effective People',
            description: 'Powerful Lessons in Personal Change by Stephen R.Covey',
            status: 'Active',
            img_url:'https://images-na.ssl-images-amazon.com/images/I/51hV5vGr4AL._SX326_BO1,204,203,200_.jpg'
        },
        {
            title: 'Create Your Own Future',
            description: 'How to Master the 12 Critical Factors of Unlimited Success by Brian Tracy',
            status: 'Finish',
            img_url:'https://p.calameoassets.com/110912013734-14180010f4a6d6c7db9250b2e8140a82/p1.jpg'
        },
        {
            title: 'Cracking The Coding Interview',
        description: '189 programming questions and solutions by Gayle Laakman',
        status: '6th edition now available',
        img_url:'https://wordery.com/jackets/00aa43a1/cracking-the-coding-interview-gayle-laakmann-mcdowell-9780984782857.jpg'

        }

        ]
    })

    // const user = new bookCollection({
    //     email: 'rahafjazz@gmail.com',
    // })

    console.log(rahaf);

    rahaf.save();
    abdelqader.save();
}
seedingData();
module.exports = bookCollection;