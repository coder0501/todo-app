import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';

// DeleteDropZone Component
const DeleteDropZone: React.FC = () => {
  return (
    <Droppable droppableId="delete">
      {(provided) => (
        <div
          ref={provided.innerRef} // Attach the ref here to the root element
          {...provided.droppableProps}
        >
          <Paper
            className="mt-8 bg-red-100 border-2 border-red-500 text-red-500 p-4 rounded flex justify-center items-center"
            component="div"
          >
            <Typography>Drag here to delete</Typography>
            {provided.placeholder}
          </Paper>
        </div>
      )}
    </Droppable>
  );
};

export default DeleteDropZone;
