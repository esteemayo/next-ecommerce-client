import mongoose from 'mongoose';

const db = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
  } catch (err) {
    throw err;
  }
};

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('disconnect', () => {
  console.log('MongoDB disconnected');
});

export default connectDB;
