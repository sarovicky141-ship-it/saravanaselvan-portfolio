import mongoose from 'mongoose';

export async function connectDB() {
  const uri = globalThis.process.env.MONGODB_URI;
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    globalThis.process.exit(1);
  }
}
