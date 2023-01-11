const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
  title: String,
  desc: String,
  // deadline: new Date(),
  date:{
    type: Date,
    default: Date.now,
  }  
});

const task = mongoose.model('task', taskModel);

module.exports = task;
