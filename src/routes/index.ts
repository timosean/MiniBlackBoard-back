import express from 'express';
import courseRouter from './course';
import authRouter from './auth';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/course', courseRouter);
router.use('/auth', authRouter);

export default router;
