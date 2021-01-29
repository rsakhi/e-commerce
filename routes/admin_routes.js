const express = require('express')
const router = express.Router();

router.get('/products', (req,res,next) => {
    console.log("inside admin prod list")
    res.send()
})

router.get('/product/new', (req,res,next) => {
  console.log("inside admin new prod")
  res.send()
})

router.post('/product', (req,res,next) => {
    console.log("inside admin prod")
    res.send()
})

router.delete('/product/:id/delete', (req,res,next) => {
    console.log("inside admin prod")
    res.send()
})

router.put('product/:id/edit', (req,res,next) => {
    console.log("inside admin prod")
    res.send()
})


module.exports = router