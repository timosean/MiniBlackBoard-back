import mongoose from 'mongoose';
import { Course } from '../interfaces/course';

const schema = new mongoose.Schema<Course>({
  courseId: { required: true, type: String },
  courseName: { required: true, type: String },
  content: { required: true, type: String },
  profId: { required: true, type: String, ref: 'User' },
  students: [{ required: true, type: String, ref: 'User' }],
});

const CourseModel = mongoose.model<Course>('Course', schema);
export default CourseModel;
