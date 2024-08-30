const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_management'
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      process.exit(1);
    }
    console.log('Connected to the database');
});

// CRUD routes
app.get('/tasks', (req, res) => {
  db.query('SELECT * FROM tasks', (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      res.status(500).json({ error: 'Failed to fetch tasks' });
      return;
    }
    res.json(results);
  });
});

app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  db.query('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      res.status(500).json({ error: 'Failed to create task' });
      return;
    }
    res.status(201).json({ id: result.insertId, title, description });
  });
});

app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  db.query('UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ?', [title, description, status, id], (err) => {
    if (err) {
      console.error('Error updating task:', err);
      res.status(500).json({ error: 'Failed to update task' });
      return;
    }
    res.sendStatus(200);
  });
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
    if (err) {
      console.error('Error deleting task:', err);
      res.status(500).json({ error: 'Failed to delete task' });
      return;
    }
    res.sendStatus(200);
  });
});

app.listen(3305, () => {
  console.log('Server running on port 3335');
});
