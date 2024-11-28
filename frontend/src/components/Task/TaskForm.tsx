import React, { useState } from 'react';
import { createTask } from '../../services/api';
import { Task } from '../../types/Task';

interface Props {
    onSubmit: () => void;
}

const TaskForm: React.FC<Props> = ({ onSubmit }) => {
    const [task, setTask] = useState<Omit<Task, 'id'>>({
        title: '',
        description: '',
        status: 'Pending',
    });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value}));
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createTask(task)
        .then(onSubmit)
        .catch(console.error);
};

return (
    <form onSubmit={handleSubmit}>
        <input name="title" value={task.title} onChange={handleChange} placeholder='Title' />
        <input name="description" value={task.description} onChange={handleChange} placeholder="Description" />
        <select name="status" value={task.status} onChange={handleChange}>
            <option value="Pending">Pending</option>
            <option value="Complete">Completed</option>
        </select>
        <button type="submit">Save Task</button>
    </form>
);
};

export default TaskForm;