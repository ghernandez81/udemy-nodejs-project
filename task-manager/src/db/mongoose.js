const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/tasks-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});



// const me = new User({ name: 'Wayne Gretzky', email: 'wayne@nhl.com', password: 'password' });

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log('Error!', error);
// });

