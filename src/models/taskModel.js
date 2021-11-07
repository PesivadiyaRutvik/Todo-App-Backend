const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);
const taskModel = mongoose.model('task', taskSchema);

module.exports = taskModel;
