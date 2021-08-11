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
        res.send(resultData[0].books)
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
    // const idx=req.params.index;
    // // const bookId = req.params.bookId;
    // const {email} = req.query;
    // bookCollection.find({email:email },(err,resultData) => {
    //   console.log(resultData[0]);
    // })

    const index = req.params.index;
    const {email} = req.query;
    bookCollection.find({email : email}, (err,resultData) =>{
        const newBookArr = resultData[0].filter((book,idx) => {
            console.log(typeof idx, typeof index)
            if(idx != index)
            {
                return true;
            }
        })
        console.log('new array : ', newBookArr)
        resultData[0].books = newBookArr;
        resultData[0].save();
        res.send(resultData[0].books);
    })

}




module.exports = {
    getBooksHandler,
    addBooksHandler,
    deleteBooksHandler
}