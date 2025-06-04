import { Router } from 'express';
import { 
  register, 
  login, 
  refreshToken, 
  getUserProfile, 
  updateProfile, 
  getAllUsers, 
  getUserById 
} from '../controllers/userController.js';
import { verifyToken, verifyAdmin } from '../middlewares/authMiddleware.js';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

// User routes
router.get('/profile', verifyToken, getUserProfile);
router.put('/profile', verifyToken, updateProfile);

// Admin routes
router.get('/', verifyToken, verifyAdmin, getAllUsers);
router.get('/:id', verifyToken, verifyAdmin, getUserById);

export default router;