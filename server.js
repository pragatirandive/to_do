import express from "express";
const app = express();
import App from "./app";
import connect from "mongoose";
import pkg from "body-parser";
const { json } = pkg;
const port = 3000;

const conn =  connect("mongodb://localhost:27017/");

app.use(json());

app.get('/tasks', async (req, res) => {
  const tasks =  tasks.find();
  res.json({message: 'tasks fetched'});
});

app.post('/tasks', async (req, res) => {
  const task = new task(req.body);
  await task.save();
  res.json({message: 'task posted' });
});

app.put('/tasks/:id', async (req, res) => {
  const task = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  await Task.findByIdAndRemove(req.params.id);
  res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
  console.log('Server started on port ',port);
});
