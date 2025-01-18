import axios from 'axios';

const API_URL = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/tasks`;

export const fetchTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (title: string) => {
  const response = await axios.post(API_URL, { title, status: 'toDo' });
  return response.data;
};

export const updateTask = async (taskId: string, status: string) => {
  await axios.put(`${API_URL}/${taskId}`, { status });
};

export const deleteTask = async (taskId: string) => {
  await axios.delete(`${API_URL}/${taskId}`);
};
