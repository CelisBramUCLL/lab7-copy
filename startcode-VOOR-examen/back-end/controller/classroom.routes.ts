import express, { NextFunction, Request, Response } from 'express';
import { Classroom } from '../domain/model/classroom';
import classroomService from '../service/classroom.service';

const classroomRouter = express.Router();

classroomRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
    console.log('router');
    try {
        const classroom = <Classroom>req.body;
        const response = await classroomService.createClassroom(classroom);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
});

export { classroomRouter };
