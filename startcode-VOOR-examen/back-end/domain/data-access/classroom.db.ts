import database from '../../util/database';
import { Classroom } from '../model/classroom';

const createClassroom = async ({ name }: Classroom): Promise<Classroom> => {
    console.log('database');
    try {
        const classroomPrisma = await database.classroom.create({
            data: { name },
        });
        return Classroom.from(classroomPrisma);
    } catch (error) {
        throw new Error('Database error. See server log for details.');
    }
};

const getByName = async ({ name }: { name: string }): Promise<Classroom | null> => {
    try {
        const classroomPrisma = await database.classroom.findFirst({
            where: { name },
        });
        return classroomPrisma ? Classroom.from(classroomPrisma) : null;
    } catch (error) {
        throw new Error('Database error. See server log for details.');
    }
};

export default {
    createClassroom,
    getByName,
};
