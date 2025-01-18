import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { Paper, Typography, Box, Button } from '@mui/material';
import { FiTrash2 } from 'react-icons/fi';

interface Task {
    _id: string;
    title: string;
    status: 'toDo' | 'completed';
}

// TaskColumnProps
interface TaskColumnProps {
    title: string;
    tasks: Task[];
    droppableId: string;
    onDeleteTask: (taskId: string) => void;
}

// TaskColumn
const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, droppableId, onDeleteTask }) => {
    return (
        // Droppable element from MUI
        <Droppable droppableId={droppableId}>
            {(provided) => (
                <Paper
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex-1 p-4 min-h-[300px]"
                >
                    <Typography variant="h6">{title}</Typography>
                    {tasks.map((task, index) => (
                        <Draggable key={task._id} draggableId={task._id} index={index}>
                            {(provided, snapshot) => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`mb-2 p-2 rounded flex justify-between items-center shadow ${snapshot.isDragging ? 'bg-gray-200' : 'bg-white'
                                        }`}
                                >
                                    <Typography>{task.title}</Typography>
                                    <Button onClick={() => onDeleteTask(task._id)}>
                                        <FiTrash2 />
                                    </Button>
                                </Box>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </Paper>
            )}
        </Droppable>
    );
};

export default TaskColumn;
