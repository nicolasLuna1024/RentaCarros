import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Atlas conectado');
  } catch (error) {
    console.error('Error de conexión a MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
