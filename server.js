const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Create a new task
app.post('/tasks', (req, res) => {
	const { title, description } = req.body;
	if (!title) return res.status(400).json({ error: 'Title is required' });
	const task = {
		id: nextId++,
		title,
		description: description || '',
		completed: false,
		createdAt: new Date().toISOString(),
	};
	tasks.push(task);
	res.status(201).json(task);
});

// Get all tasks
app.get('/tasks', (req, res) => {
	res.json(tasks);
});

// Get a task by ID
app.get('/tasks/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
	const task = tasks.find((t) => t.id === id);
	if (!task) return res.status(404).json({ error: 'Task not found' });
	res.json(task);
});

// Update a task by ID
app.put('/tasks/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
	const task = tasks.find((t) => t.id === id);
	if (!task) return res.status(404).json({ error: 'Task not found' });
	const { title, description, completed } = req.body;
	if (title !== undefined) task.title = title;
	if (description !== undefined) task.description = description;
	if (completed !== undefined) task.completed = Boolean(completed);
	task.updatedAt = new Date().toISOString();
	res.json(task);
});

// Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
	const index = tasks.findIndex((t) => t.id === id);
	if (index === -1) return res.status(404).json({ error: 'Task not found' });
	tasks.splice(index, 1);
	res.status(204).end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

