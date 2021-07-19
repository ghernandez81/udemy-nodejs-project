require('../src/db/mongoose');
const Task = require('../src/models/task');

// const call = async () => {
//   return Task.findByIdAndDelete('6040e3a7531301f5fa4f42f1')
//     .then((task) => {
//       console.log(task);
//       return Task.countDocuments({ completed: false });

//     }).then((count) => {
//       console.log(count);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
}

deleteTaskAndCount('12323').then((count) => {
  console.log(count, 'count');
}).catch((err) => {
  console.log(err);
});

