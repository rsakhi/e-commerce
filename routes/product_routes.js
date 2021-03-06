const express = require('express')

const router = express.Router()

router.get('/', (req,res,next) => {
  console.log('from product routes')
  console.log(req.url)
  res.render('product',{page: 'product'})
})

router.post('/', (req,res,next) => {
  console.log('from product routes Post')
  console.log(req.url)
  res.send()
})

router.get('/:id/details', (req,res,next) => {
    console.log("inside details page");
    console.log(req.params.id)
    res.send()
})

module.exports = router;