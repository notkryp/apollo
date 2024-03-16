import { Button } from "flowbite-react";
import students from "../assets/students.jpeg";
import React from "react";

const CourseCard = () => {
  return (
    <div className="flex-col flex justify-center p-6 gap-8 shadow-xl rounded-lg w-[21rem]  ">
      <div className="flex items-center flex-col gap-8 justify-center transition duration-300 ease-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer">
        <div className="flex flex-1 w-[300px] h-[250px] rounded-xl">
          <img
            src={students}
            alt="apollo students"
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col rounded-full bg-white justify-center  w-[300px] h-[250px] items-center">
          <div className="flex-1 w-full h-full flex-col flex justify-center gap-3 ">
            <h1 className="text-xl text-bold ">Primary Level</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, quasi omnis quisquam qui hic recusandae
              necessitatibus consectetur officiis commodi ratione ad aspernatur
              beatae modi, explicabo voluptatibus. Numquam debitis fugiat
              soluta?
            </p>
            <Button className="bg-[#00994B] flex w-full md:w-max lg:w-max xl:w-max">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
