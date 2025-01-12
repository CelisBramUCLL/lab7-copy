import LearningPath from "@components/learning-path";
import { Teacher, User } from "@types";
import { useEffect, useState } from "react";

type Props = {
    teachers: Teacher[];
};

const TeacherOverview: React.FC<Props> = ({ teachers }: Props) => {
    const [loggedInUser, setLoggedInUser] = useState<User>(null);

    useEffect(() => {
        setLoggedInUser(JSON.parse(sessionStorage.getItem("loggedInUser")));
    }, []);

    console.log(loggedInUser);

    return (
        <>
            <section className="mt-5">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Learning path</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render a row for each teacher containing name and learning path */}
                        {/* For question 1.c, you can use the LearningPath component. */}
                        {teachers.map((teacher, index) => (
                            <tr key={index}>
                                <td>
                                    {teacher.user.lastName}{" "}
                                    {teacher.user.firstName}
                                </td>
                                {(!loggedInUser ||
                                    loggedInUser.role != "admin") && (
                                    <td>{teacher.learningPath}</td>
                                )}
                                {loggedInUser &&
                                    loggedInUser.role === "admin" && (
                                        <td>
                                            <LearningPath
                                                teacherId={teacher.id}
                                                learningPath={
                                                    teacher.learningPath
                                                }
                                            />
                                        </td>
                                    )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default TeacherOverview;
