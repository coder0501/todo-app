import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import AddTaskForm from './components/AddTaskForm';
import TaskColumn from './components/TaskColumn';
import DeleteDropZone from './components/DeleteDropZone';
import { fetchTasks, addTask, updateTask, deleteTask } from './utils/api';

// Define the Task interface for type safety
interface Task {
  _id: string; // Unique identifier for each task
  title: string; // Task title or description
  status: 'toDo' | 'completed'; // Task status
}

const App: React.FC = () => {

  // State to store the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  // Handle adding a new task
  const handleAddTask = async (taskTitle: string) => {
    const newTask = await addTask(taskTitle); // Add the task via API
    setTasks((prev) => [...prev, newTask]); // Update state with the new task
  };

  // Handle deleting a task
  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId); // Delete the task via API
    setTasks((prev) => prev.filter((task) => task._id !== taskId)); // Remove task from state
  };

  // Handle the end of a drag-and-drop action
  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    // Exit if no destination or the task is dropped in the same place
    if (!destination || source.droppableId === destination.droppableId) return;

    const draggedTaskId = result.draggableId; // Get the ID of the dragged task

    // If dropped in the delete drop zone, delete the task
    if (destination.droppableId === 'delete') {
      handleDeleteTask(draggedTaskId);
      return;
    }

    // Update the task's status in the local state
    const updatedTasks = tasks.map((task) =>
      task._id === draggedTaskId ? { ...task, status: destination.droppableId } : task
    );
    setTasks(updatedTasks);

    // Update the task's status on the server
    updateTask(draggedTaskId, destination.droppableId);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* App title */}
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

      {/* Form to add a new task */}
      <AddTaskForm onAddTask={handleAddTask} />

      {/* Drag-and-drop context */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 justify-between">
          {/* Column for To-Do tasks */}
          <TaskColumn
            title="To-Do"
            tasks={tasks.filter((task) => task.status === 'toDo')}
            droppableId="toDo"
            onDeleteTask={handleDeleteTask}
          />

          {/* Column for Completed tasks */}
          <TaskColumn
            title="Completed"
            tasks={tasks.filter((task) => task.status === 'completed')}
            droppableId="completed"
            onDeleteTask={handleDeleteTask}
          />
        </div>

        {/* Delete drop zone */}
        <DeleteDropZone />
      </DragDropContext>
    </div>
  );
};

export default App;
