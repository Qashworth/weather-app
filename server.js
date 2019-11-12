const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view.engine', 'ejs')

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index.ejs')
})
app.post('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index.ejs')
  console.log(req.body.city);
})

app.listen(4300, function () {
  console.log('Example app listening on port 4300!')
})
