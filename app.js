const path = require('path')

const expess =  require('express');
const bodyParser = require('body-parser')

const productRoutes = require('./routes/product_routes')
const adminRoutes = require('./routes/admin_routes')

const app = expess();
app.set('view engine', 'ejs');
app.set('viwes', './views')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/product', productRoutes);

app.use('/admin', adminRoutes);

app.use('/', (req,res,next) => {
  console.log(req.url)
  res.render('Home', {title: 'shop page'})
})


app.listen(8081)
