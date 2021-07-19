const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  description: {
    trim: true,
    required: true,
    type: String
  },
  completed: {
    default: false,
    type: Boolean
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = Task;