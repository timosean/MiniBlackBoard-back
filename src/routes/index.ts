import express from 'express';
import CourseRouter from './course';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.use('/course', CourseRouter);

export default router;
