import express from 'express';
import {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente
} from '../controllers/clienteController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getClientes);
router.get('/:id', authMiddleware, getCliente);
router.post('/', authMiddleware, createCliente);
router.put('/:id', authMiddleware, updateCliente);
router.delete('/:id', authMiddleware, deleteCliente);

export default router;
