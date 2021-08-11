const bookCollection = require('./BookModel')

function getBooksHandler(req, res) {
  const  email  = req.query.email;

  // search
  bookCollection.find({ email: email }, function (err, booksData) {
    if (err) {
      res.send('Error');
    }
    else {
      res.send(booksData[0].books);
    }
  })
}

const addBooksHandler = async (req, res) => {

  // Restuctuting Assignment
    const {email,title,description,status,img_url} = req.body;
    console.log(req.body);

    bookCollection.find({email:email}, (err, resultData) =>{
      if(err){
        res.send('not working')
      }else{
        resultData[0].books.push({
          title:title,
          description:description,
          status:status,
          img_url:img_url

        })
        resultData[0].save();
        res.send(resultData[0],books)
      }

    })

    // const newBookObj = new bookCollection({
    //     email: email,
    //     title: title,
    //     description: description,
    //     status: status,
    //     img_url: img_url,
    // });
    // newBookObj.save();
    // res.json(newBookObj);
}


const deleteBooksHandler = async (req,res) => {
    // console.log(idx);
    const idx=req.params.index;
    // const bookId = req.params.bookId;
    const {email} = req.query;
    bookCollection.find({email:email },(err,resultData) => {
      console.log(resultData[0]);
    })
    // bookCollection.deleteOne({ _id: bookId }, (error, resultData) => {
    //     res.send(deleted);
    // })
}




module.exports = {
    getBooksHandler,
    addBooksHandler,
    deleteBooksHandler
}