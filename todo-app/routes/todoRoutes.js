const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/todos.db');

// GET all todos
router.get('/', (req, res) => {
db.all('SELECT * FROM todos', [], (err, rows) => {
if (err) {
    return res.status(500).json({ error: err.message });
}
res.json({ todos: rows });
});
});

// POST a new todo
router.post('/', (req, res) => {
const { task } = req.body;
db.run('INSERT INTO todos (task) VALUES (?)', [task], function(err) {
if (err) {
    return res.status(500).json({ error: err.message });
}
res.json({ id: this.lastID });
});
});

// DELETE a todo
router.delete('/:id', (req, res) => {
const { id } = req.params;
db.run('DELETE FROM todos WHERE id = ?', [id], function(err) {
if (err) {
    return res.status(500).json({ error: err.message });
}
res.json({ message: 'Todo deleted' });
});
});

module.exports = router;
