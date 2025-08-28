import express from 'express';
import {
  getRentas,
  getRenta,
  createRenta,
  updateRenta,
  finalizarRenta,
  deleteRenta
} from '../controllers/rentaController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getRentas);
router.get('/:id', authMiddleware, getRenta);
router.post('/', authMiddleware, createRenta);
router.put('/:id', authMiddleware, updateRenta);
router.put('/:id/finalizar', authMiddleware, finalizarRenta);
router.delete('/:id', authMiddleware, deleteRenta);

export default router;
