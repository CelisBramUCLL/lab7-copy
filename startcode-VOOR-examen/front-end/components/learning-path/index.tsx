import TeacherService from "@services/TeacherService";
import { useState } from "react";

type Props = {
    teacherId: number;
    learningPath: string;
};

const LearningPath: React.FC<Props> = ({ teacherId, learningPath }: Props) => {
    const [newLearningPath, setNewLearningPath] = useState(learningPath);
    const handleLearningPathChange = (event: { target: { value: string } }) => {
        {
            setNewLearningPath(event.target.value);
            TeacherService.updateLearningPath(teacherId, event.target.value);
        }
    };

    return (
        <div className="ml-6">
            <select
                id="learningPath"
                className="ml-2 p-1"
                value={newLearningPath}
                onChange={(e) =>
                    handleLearningPathChange({
                        target: { value: e.target.value },
                    })
                }
            >
                <option value="Infrastructure">Infrastructure</option>
                <option value="Software development">
                    Software development
                </option>
                <option value="Cybersecurity">Cybersecurity</option>
            </select>
        </div>
    );
};

export default LearningPath;
