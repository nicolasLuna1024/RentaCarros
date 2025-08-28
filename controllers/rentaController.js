import Renta from '../models/Renta.js';
import Carro from '../models/Carro.js';

export const getRentas = async (req, res) => {
  try {
    const rentas = await Renta.find().populate('clienteId carroId');
    res.json(rentas);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener rentas', error });
  }
};

export const getRenta = async (req, res) => {
  try {
    const renta = await Renta.findById(req.params.id).populate('clienteId carroId');
    if (!renta) return res.status(404).json({ msg: 'Renta no encontrada' });
    res.json(renta);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener renta', error });
  }
};

export const createRenta = async (req, res) => {
  try {
    const { clienteId, carroId, fechaInicio, fechaFin, costo } = req.body;
    const carro = await Carro.findById(carroId);
    if (!carro || !carro.disponible) return res.status(400).json({ msg: 'Carro no disponible' });
    const renta = new Renta({ clienteId, carroId, fechaInicio, fechaFin, costo });
    await renta.save();
    carro.disponible = false;
    await carro.save();
    res.status(201).json(renta);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear renta', error });
  }
};

export const updateRenta = async (req, res) => {
  try {
    const renta = await Renta.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!renta) return res.status(404).json({ msg: 'Renta no encontrada' });
    res.json(renta);
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar renta', error });
  }
};

export const finalizarRenta = async (req, res) => {
  try {
    const renta = await Renta.findById(req.params.id);
    if (!renta) return res.status(404).json({ msg: 'Renta no encontrada' });
    renta.estado = 'finalizada';
    await renta.save();
    const carro = await Carro.findById(renta.carroId);
    if (carro) {
      carro.disponible = true;
      await carro.save();
    }
    res.json({ msg: 'Renta finalizada' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al finalizar renta', error });
  }
};

export const deleteRenta = async (req, res) => {
  try {
    const renta = await Renta.findByIdAndDelete(req.params.id);
    if (!renta) return res.status(404).json({ msg: 'Renta no encontrada' });
    res.json({ msg: 'Renta eliminada' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar renta', error });
  }
};
