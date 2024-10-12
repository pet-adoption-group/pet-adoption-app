// server/routes/userRoutes.js
import express from 'express';
import { registerUser, authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js'; // Assuming you have an auth middleware

const router = express.Router();

router.post('/register', registerUser);  // Route for user registration
router.post('/login', authUser);         // Route for user login and get a token
router.get('/profile', protect, getUserProfile);  // Route to get user profile, protected

export default router;



