const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
    },
    status: {
      type: String,
      enum: ['toDo', 'completed'],
      default: 'toDo',
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt
  }
);

module.exports = mongoose.model('Task', taskSchema);
