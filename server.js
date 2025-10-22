require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Product = require('./models/product');
const validateProduct = require('./middleware/validateProduct');

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World API is up!' });
});

// Create a new product
app.post('/api/product', validateProduct, async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save(); // ← missing '=' fixed
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message }); // ← fixed typo “erгor”
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); // ← fixed template literal
});
