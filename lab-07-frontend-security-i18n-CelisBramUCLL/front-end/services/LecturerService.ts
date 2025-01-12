import { User } from "@types";

const getAllLecturers = () => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + "/lecturers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getLecturerById = (lecturerId: string) => {
  return fetch(process.env.NEXT_PUBLIC_API_URL + `/lecturers/${lecturerId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const LecturerService = {
  getAllLecturers,
  getLecturerById,
};

export default LecturerService;
