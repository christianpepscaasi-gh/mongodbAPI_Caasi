const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/grocery_store', {
      useNewUrlParser: true,
      useUnifiedTopology: true, // ← correct spelling
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`); // ← fixed template literal
  } catch (error) {
    console.error(`Error: ${error.message}`); // ← fixed template literal
    process.exit(1);
  }
};

module.exports = connectDB;
