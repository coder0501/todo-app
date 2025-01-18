import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Typography, Box, Button } from '@mui/material';
import { FiTrash2 } from 'react-icons/fi';

// Task Interface
interface Task {
  _id: string;
  title: string;
  status: 'toDo' | 'completed';
}

// TaskColumnProps Interface
interface TaskColumnProps {
    title: 'Default Title';  // Default value for title
    tasks: [];               // Default value for tasks
    droppableId: string;
  onDeleteTask: (taskId: string) => void;
}

// TaskColumn Component
const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, droppableId, onDeleteTask }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          ref={provided.innerRef} // Attach `ref` to a native element
          {...provided.droppableProps}
          className="flex-1 p-4 " // Custom classes for styling
        >
          <Paper component="div" className="flex-1 p-4">
            {/* Column Title */}
            <Typography variant="h6">{title}</Typography>

            {/* Render Tasks */}
            {tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
                {(provided, snapshot) => (
                  <div // Native div wrapping the Box
                    ref={provided.innerRef} // Attach `ref` to the div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`mb-2 p-2 rounded shadow flex justify-between items-center ${
                      snapshot.isDragging ? 'bg-gray-200' : 'bg-white'
                    }`} // Conditional styling based on drag state
                  >
                    <Box className="flex-grow">
                      <Typography>{task.title}</Typography>
                    </Box>
                    <Button onClick={() => onDeleteTask(task._id)}>
                      <FiTrash2 />
                    </Button>
                  </div>
                )}
              </Draggable>
            ))}

            {/* Placeholder for Droppable */}
            {provided.placeholder}
          </Paper>
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;
