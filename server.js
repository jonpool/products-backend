const express = require("express");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o banco
mongoose.connect(
   'mongodb://localhost:27017/nodeapi',
   {useNewUrlParser: true, 
   useUnifiedTopology:true
});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req , res)=>{
   res.send("hello Love");
   Product.create({
      title:'React Native',
      description:'Build native apps with React',
      url:'http://github.com/facebook/react-native'
   });
});
app.listen(3001);

