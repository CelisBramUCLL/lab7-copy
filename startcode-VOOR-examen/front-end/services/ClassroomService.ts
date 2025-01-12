import { Classroom } from "@types";

const createClassroom = async (classroom: any) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    return await fetch(`${apiUrl}/classrooms`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(classroom),
    });
};
const ClassroomService = {
    createClassroom,
};
export default ClassroomService;
