import express from 'express';
import { fetch,create,update,deleteuser,findUserById } from '../controller/userController.js';

const router = express.Router();
router.post('/create', create);
router.get('/fetch', fetch);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteuser);
router.get('/find/:id', findUserById);

export default router;