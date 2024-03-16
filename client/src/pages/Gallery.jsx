import StudentsCard from "../components/StudentsCard";
import { facultyDetails } from "../Constants/index.js";
import { studentDetails } from "../Constants/index.js";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/gallery/faculty");
  };

  const handleClickStudent = () => {
    navigate("/gallery/students");
  };

  return (
    <div className="flex md:flex-row  justify-center items-center flex-col h-[100vh] px-9 gap-8">
      <div className="flex-col flex gap-5 items-center  flex-1">
        {facultyDetails.map((faculty, key) => (
          <div key={key} className="flex items-center justify-center hover:cursor-pointer">
            <div
              className="w-[20rem] h-auto rounded-lg flex flex-col items-center md:w-[22rem] xl:w-[35rem] lg:w-[28rem] sm:w-[22rem]"
              onClick={handelClick}
            >
              <p className="xl:text-5xl xl:mb-5 font-montserrat text-2xl text-bold text-slate-700 pb-2 sm:text-3xl">{faculty.title}</p>
              <img
                src={faculty.img}
                alt="Faculty"
                className="rounded-2xl w-full h-full object-cover shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-center">
          {studentDetails.map((student, key) => (
            <div
              key={key}
              className="w-[20rem] md:w-[22rem] h-auto rounded-lg flex flex-col items-center justify-center xl:w-[35rem] lg:w-[28rem] sm:w-[22rem]"
              onClick={handleClickStudent}
            >
              <p className="font-montserrat text-2xl text-bold text-slate-700 pb-2 sm:text-3xl xl:text-5xl xl:mb-5">{student.title}</p>
              <img src={student.img} alt="" className="rounded-2xl w-full h-full object-cover shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
