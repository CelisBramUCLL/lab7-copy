import classroomDb from '../domain/data-access/classroom.db';
import { Classroom } from '../domain/model/classroom';
import { ClassroomInput } from '../types';

const createClassroom = async ({ name }: ClassroomInput): Promise<Classroom> => {
    console.log('service');
    const existingClassroom = await classroomDb.getByName({ name });
    if (existingClassroom) {
        throw new Error(
            `Classroom with name ${name} and id ${existingClassroom.id} already exists`
        );
    }

    const classroom = new Classroom({ name });

    return await classroomDb.createClassroom(classroom);
};

export default { createClassroom };
