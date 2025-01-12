import teacherDb from '../domain/data-access/teacher.db';
import { Teacher } from '../domain/model/teacher';

const getAllTeachers = async (): Promise<Teacher[]> => teacherDb.getAllTeachers();

const updateLearningPath = async (teacherId: number, learningPath: string): Promise<Teacher> =>
    teacherDb.updateLearningPath(teacherId, learningPath);

export default { getAllTeachers, updateLearningPath };
