const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Configurando o Mongoose
  mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connected with sucess')
    }).catch((err) => {
      console.warn(err)
    })