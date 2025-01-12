import ClassroomService from "@services/ClassroomService";
import { StatusMessage } from "@types";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import { useState } from "react";

const ClassroomForm: React.FC = () => {
    const { t } = useTranslation();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState<String | null>(null);
    const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);

    const clearErrors = () => {
        setNameError(null);
        setStatusMessages([]);
    };

    const validate = (): boolean => {
        let result = true;

        if (!name && name.trim() === "") {
            setNameError(t("login.validate.name"));
            result = false;
        }

        return result;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        clearErrors();

        if (!validate()) {
            return;
        }
        const classroom = { name: name };
        const response = await ClassroomService.createClassroom(classroom);
        const actual = await response.json();

        if (response.status === 200) {
            setStatusMessages([
                {
                    message: `Added classroom with name ${name} and ID ${actual.id}`,
                    type: "success",
                },
            ]);
        } else {
            setStatusMessages([
                {
                    message: t("classroom.error"),
                    type: "error",
                },
            ]);
        }

        setName("");
    };
    return (
        <>
            {statusMessages && (
                <div className="row">
                    <ul className="list-none mb-3 mx-auto ">
                        {statusMessages.map(({ message, type }, index) => (
                            <li
                                key={index}
                                className={classNames({
                                    "text-red-800": type === "error",
                                    "text-green-800": type === "success",
                                })}
                            >
                                {message}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label className="block mb-2 text-sm font-semibold">
                    {t("classroom.name")}
                </label>
                <input
                    type="text"
                    value={name}
                    className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue:500 block w-full p-2.5 mb-2"
                    onChange={(event) => setName(event.target.value)}
                />
                {nameError && (
                    <div className="text-red-800 mb-2 ">{nameError}</div>
                )}
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    type="submit"
                >
                    {t("classroom.add")}
                </button>
            </form>
        </>
    );
};

export default ClassroomForm;
