import Carro from '../models/Carro.js';

export const getCarros = async (req, res) => {
  try {
    const carros = await Carro.find();
    res.json(carros);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener carros', error });
  }
};

export const getCarro = async (req, res) => {
  try {
    const carro = await Carro.findById(req.params.id);
    if (!carro) return res.status(404).json({ msg: 'Carro no encontrado' });
    res.json(carro);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener carro', error });
  }
};

export const createCarro = async (req, res) => {
  try {
    const carro = new Carro(req.body);
    await carro.save();
    res.status(201).json(carro);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear carro', error });
  }
};

export const updateCarro = async (req, res) => {
  try {
    const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!carro) return res.status(404).json({ msg: 'Carro no encontrado' });
    res.json(carro);
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar carro', error });
  }
};

export const deleteCarro = async (req, res) => {
  try {
    const carro = await Carro.findByIdAndDelete(req.params.id);
    if (!carro) return res.status(404).json({ msg: 'Carro no encontrado' });
    res.json({ msg: 'Carro eliminado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar carro', error });
  }
};
