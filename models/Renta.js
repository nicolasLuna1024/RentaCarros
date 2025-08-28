import mongoose from 'mongoose';

const rentaSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  carroId: { type: mongoose.Schema.Types.ObjectId, ref: 'Carro', required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  costo: { type: Number, required: true },
  estado: { type: String, enum: ['activa', 'finalizada'], default: 'activa' }
});


export default mongoose.model('Renta', rentaSchema);
