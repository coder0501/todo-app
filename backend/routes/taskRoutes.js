const express = require('express');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// Route: GET /tasks
router.get('/', getTasks);

// Route: POST /tasks
router.post('/', createTask);

// Route: PUT /tasks/:id
router.put('/:id', updateTask);

// Route: DELETE /tasks/:id
router.delete('/:id', deleteTask);

module.exports = router;
