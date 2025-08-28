import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  licenciaConducir: { type: String, required: true },
  telefono: { type: String, required: true }
});


export default mongoose.model('Cliente', clienteSchema);
