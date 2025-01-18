import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material'; // Material UI

// Props Interface
interface AddTaskFormProps {
  onAddTask: (taskTitle: string) => void;
}

// AddTaskForm Component
const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  // Handler for adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask.trim()); // Trim input before passing to the parent
      setNewTask(''); // Clear input after adding task
    }
  };

  return (
    <Box className="mb-4 flex flex-col items-center justify-center">
      {/* Input field for adding a new task */}
      <TextField
        fullWidth
        label="Add a new task"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)} // Update state on input change
      />
      {/* Button to trigger adding a task */}
      <Button
        variant="contained"
        className="mt-2 block mx-auto bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </Button>
    </Box>
  );
};

export default AddTaskForm;
