import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

export const register = async (req, res) => {
  try {
    const { username, password, rol } = req.body;
    const existeUsuario = await Usuario.findOne({ username });
    if (existeUsuario) return res.status(400).json({ msg: 'Usuario ya existe' });
    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = new Usuario({ username, password: hashedPassword, rol });
    await usuario.save();
    res.status(201).json({ msg: 'Usuario registrado' });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el registro', error });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const usuario = await Usuario.findOne({ username });
    if (!usuario) return res.status(400).json({ msg: 'Usuario no encontrado' });
    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(400).json({ msg: 'Credenciales incorrectas' });
    const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: 'Error en el login', error });
  }
};
