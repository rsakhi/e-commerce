const path = require('path')
const fs = require('fs')

const expess =  require('express');
const bodyParser = require('body-parser')

const app = expess();
app.set('view engine', 'ejs');
app.set('viwes', './views')

app.use(bodyParser.urlencoded({extended: false}))

app.post('/product', (req,res,next) => {
  console.log(req.url)
  console.log(req.body.name)
  fs.writeFile('./data.json', "dd", (err) => {
    console.log(err)
  })
  res.redirect('/')
})


app.use('/', (req,res,next) => {
  console.log(req.url)
  res.render('layout', {title: 'shop page'})
  // res.sendFile(path.join(__dirname, 'views', 'product.html'))
})


app.listen(8081)


// const server = http.createServer((req,res) => {
//   console.log(req.url)
//   res.end()
// });

// server.listen(8081)