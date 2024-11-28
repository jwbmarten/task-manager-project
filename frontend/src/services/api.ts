import axios from 'axios';
import { Task } from '../types/Task';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const getTasks = async(): Promise<Task[]> => {
    const response = await api.get('/tasks');
    return response.data;
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await api.post('/tasks', task);
    return response.data;
};

export const updateTask = async (id: number, task: Omit<Task, 'id'>): Promise<Task> => {
    const response = await api.put(`/tasks/${id}`, task); // the first argument MUST BE IN BACKTICKS!!
    return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`); // the  argument MUST BE IN BACKTICKS!!
};