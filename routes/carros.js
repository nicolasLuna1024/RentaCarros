import express from 'express';
import {
  getCarros,
  getCarro,
  createCarro,
  updateCarro,
  deleteCarro
} from '../controllers/carroController.js';
import { authMiddleware, adminMiddleware } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getCarros);
router.get('/:id', authMiddleware, getCarro);
router.post('/', authMiddleware, adminMiddleware, createCarro);
router.put('/:id', authMiddleware, adminMiddleware, updateCarro);
router.delete('/:id', authMiddleware, adminMiddleware, deleteCarro);

export default router;
