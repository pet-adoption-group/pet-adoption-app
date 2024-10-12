// src/routes/petRoutes.js
import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';  // Correct import
import { getPets, createPet, updatePet, deletePet } from '../controllers/petController.js';

const router = express.Router();

router.route('/')
  .get(getPets)
  .post(protect, admin, createPet);  // Use protect and admin middleware here

router.route('/:id')
  .put(protect, admin, updatePet)
  .delete(protect, admin, deletePet);

export default router;





