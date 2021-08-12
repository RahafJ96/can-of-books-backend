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
  // console.log(booksData[0].books);
}

function addBooksHandler(req, res){

  // Restuctuting Assignment
    const {email,title,description,status,img_url} = req.body;
    // console.log(req.body);

    bookCollection.find({email:email}, (err, booksData) =>{
      if(err){
        res.send('not working')
      }else{
        booksData[0].books.push({
          title:title,
          description:description,
          status:status,
          img_url:img_url

        })
        booksData[0].save();
        res.send(booksData[0].books)
      }
      console.log(booksData);

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
  // console.log('delete',booksData[0].books);

    const id = req.params.id;
    const {email} = req.query;
    bookCollection.find({email : email}, (err,resultData) =>{
        // const newBookArr = resultData[0].books.filter((book,idx) => {
            // console.log(typeof idx, typeof index)
            if(err){
              "error"
            }
           else{
             const newBooks =resultData[0].books.filter((book,index)=> index != id);

            //  console.log('new array : ', newBookArr)
             resultData[0].books = newBooks;
             resultData[0].save();
             res.send(resultData[0].books);
           }
        // }
    // )
    })

}

const updateBookHandler = async (req, res) =>{
  const index = req.params.index;
  const {email} = req.body;
  bookCollection.findOne({email},(err,resultData) => {
      console.log('findOne: ' ,resultData);
      resultData.cats.splice(index,1,{
          email: email,
      })
      resultData.save();
      res.send(resultData.books);
  })
}





module.exports = {
    getBooksHandler,
    addBooksHandler,
    deleteBooksHandler,
    updateBookHandler,
}