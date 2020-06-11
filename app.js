const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/',(req,res)=>{
  return res.send("hello from servicenow !!!!!")
})

app.listen(process.env.PORT||5000, () => console.log('Server started on port 5000'));