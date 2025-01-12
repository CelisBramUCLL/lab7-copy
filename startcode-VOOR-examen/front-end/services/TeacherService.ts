const getAllTeachers = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/teachers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const updateLearningPath = (teacherId: number, learningPath: string) => {
    const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL
    }/teachers/${teacherId}/learningPath?learningPath=${encodeURIComponent(
        learningPath
    )}`;

    return fetch(apiUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

const TeacherService = {
    getAllTeachers,
    updateLearningPath,
};

export default TeacherService;
