const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

const authRouter = require('./routes/auth');
const contactRouter = require('./routes/contact');
const cvRouter = require('./routes/cv'); // Add this line
const auth = require('./middleware/auth');

app.use('/auth', authRouter);
app.use('/contact', contactRouter);
app.use('/cv', cvRouter); // Add this line

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Example of a protected route
app.get('/dashboard', auth, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
