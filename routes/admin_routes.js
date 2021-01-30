const express = require('express')
const router = express.Router();

router.get('/products', (req,res,next) => {
    console.log("inside admin prod list")
    res.render('admin/products', {page: 'admin_product'})
})

router.get('/product/new', (req,res,next) => {
  console.log("inside admin new prod")
  res.render('admin/product_form',{page: 'add_product'})
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