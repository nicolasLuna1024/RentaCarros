import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token, acceso denegado' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};

export const adminMiddleware = (req, res, next) => {
  if (req.user?.rol !== 'admin') {
    return res.status(403).json({ msg: 'Acceso solo para administradores' });
  }
  next();
};
