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


// Model - Usuários
    // Definindo o Model
      const UserSchema = mongoose.Schema({

        nome: {
          type: String,
          require: true,
        },

        sobrenome: {
          type: String,
          require: true
        },

        email: {
          type: String,
          require: true,
        },

        idade: {
          type: Number,
          require: true,
        },

        pais: {
          type: String
        }
      }) 
// Colection
  mongoose.model('usuarios', UserSchema)

  const newUser = mongoose.model('usuarios') 
  new newUser({
      nome: "Gabriel",
      sobrenome: "Santos",
      email: "biel@gmail.com",
      idade: 24,
      pais: "Brazil"
    }).save().then(() => {
      console.log('User created')
    }).catch((err) => {
      console.warn(err)
    })