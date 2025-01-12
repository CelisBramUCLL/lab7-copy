import database from '../../util/database';
import { Teacher } from '../model/teacher';

const getAllTeachers = async (): Promise<Teacher[]> => {
    try {
        const teacherPrisma = await database.teacher.findMany({
            include: { user: true },
        });
        return teacherPrisma.map((teacherPrisma) => Teacher.from(teacherPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const updateLearningPath = async (teacherId: number, learningPath: string): Promise<Teacher> => {
    try {
        // Update the learning path of the teacher with the given ID.
        // Return the updated teacher including its user information.
        // Return a domain object.
        const teacherPrisma = await database.teacher.update({
            where: { id: teacherId },
            data: {
                learningPath: learningPath,
            },
            include: {
                user: true,
            },
        });
        return Teacher.from(teacherPrisma);
    } catch (error) {
        console.log(error);
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    getAllTeachers,
    updateLearningPath,
};
