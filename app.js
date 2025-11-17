const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// session
app.use(session({
  secret: 'secret_key_for_demo_change_in_prod',
  resave: false,
  saveUninitialized: false,
}));

// connect db
mongoose.connect('mongodb://127.0.0.1:27017/StudentDB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.log('❌ Connection error:', err));

// routes
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);

// home redirect
app.get('/', (req, res) => {
  res.redirect('/students');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
