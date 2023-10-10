import express from 'express';
import userController from '../Controllers/userController.js';
const router = express.Router();

router.get('/',userController.getAllUsers);
router.post('/createUser',userController.createUser);
router.get('/getUserByID/:id',userController.getUserByID);

export default router;