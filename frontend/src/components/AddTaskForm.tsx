import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material'; // Material UI

interface AddTaskFormProps {
  onAddTask: (taskTitle: string) => void;
}

//Add Task
const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (

    //Box element from MUI with Tailwind CSS
    <Box className="mb-4 flex flex-col items-center justify-center">
      <TextField
        fullWidth
        label="Add a new task"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
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
