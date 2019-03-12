
router.post('/book', (req, res, next) => {
  const {title, author} = req.body;
  bookModel.create({title,author}).then(data => {
    console.log(data);
    res.json({
      code: 200,
      data
    })
  })
})