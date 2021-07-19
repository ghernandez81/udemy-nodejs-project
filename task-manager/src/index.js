const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();

const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send('We are currently in maintenance mode, get bent');
//   //next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
  console.log('Server is up on port' + port);
});

const pet = {
  name:'Hal'
}

// const jwt = require('jsonwebtoken');
// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'asdd' }, 'testingd33', { expiresIn: '7 days' });
//   console.log(token);

//   const data = jwt.verify(token, 'testingd33');
//   console.log(data)

// }
//myFunction();
// const bcrypt = require('bcryptjs');

// const myFunction = async () => {
//   const password = 'Redddgfd';
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword)

//   const isMatch = await bcrypt.compare(password, hashedPassword)
//   console.log(isMatch);
// }

// myFunction()