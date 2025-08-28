import mongoose from 'mongoose';

const carroSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  año: { type: Number, required: true },
  matricula: { type: String, required: true, unique: true },
  disponible: { type: Boolean, default: true }
});


export default mongoose.model('Carro', carroSchema);
