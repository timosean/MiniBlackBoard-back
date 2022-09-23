import express from 'express';
import * as AuthController from '../controllers/auth';

const router = express.Router();

router.post('/login', AuthController.localLogin);

export default router;
