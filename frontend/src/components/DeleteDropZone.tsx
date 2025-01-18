import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Paper, Typography } from '@mui/material';

//DeleteDropZone
const DeleteDropZone: React.FC = () => {
  return (
    <Droppable droppableId="delete">
      {(provided) => (
        // MUI paper element
        <Paper
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="mt-8 bg-red-100 border-2 border-red-500 text-red-500 p-4 rounded flex justify-center items-center"
        >
          <Typography>Drag here to delete</Typography>
          {provided.placeholder}
        </Paper>
      )}
    </Droppable>
  );
};

export default DeleteDropZone;
