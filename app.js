import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/tasks', { name, description });
    setName('');
    setDescription('');
  };

  const handleToggleStatus = async (id) => {
    await axios.put(`/tasks/${id}`, { status: true });
  };

  const handleDelete = async (id) => {
    await axios.delete(`/tasks/${id}`);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input type="checkbox" checked={task.status} onChange={() => handleToggleStatus(task._id)} />
            <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>{task.name}</span>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;