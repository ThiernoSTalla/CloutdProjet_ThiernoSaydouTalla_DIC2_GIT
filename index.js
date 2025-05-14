const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Railway API!');
});

app.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
