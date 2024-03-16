import { useState } from "react";
import { Testimonials_data } from "../Constants/index.js";
import comma from "../assets/comma.png";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const length = Testimonials_data.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <div>
      <div className="items center justify-center flex">
        <h1 className="font-montserrat text-green-700 font-bold 2xl:text-6xl text-[2rem] sm:text-[2.5rem] 2xl:mb-24 mb-8 lg:text-6xl">
          Testimonials
        </h1>
      </div>

      {Testimonials_data.map(
        (item, index) =>
          index === current && (
            <div key={index}>
              <div className="pb-[40px] flex items-start gap-4">
                <img src={comma} alt="" className="2xl:w-16 2xl:h-16 w-10 h-10 lg:w-15 lg:h-15 " />
                <h2 className="text-black 2xl:text-3xl text-[1 rem] font-bold lg:text-[2rem] md:text-[1.5rem] 
                sm:text-[1.4rem]">
                  {item.content_text}
                </h2>
              </div>
              <div className="flex-col 2xl:flex-row flex justify-between rounded-full">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full">
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-full 2xl:w-24 2xl:h-24 w-16 h-16 border-green-500 2xl:border-4 object-cover lg:w-24 lg:h-24 "
                    />
                  </div>
                  <div>
                    <h6 className="text-black font-montserrat 2xl:text-2xl text-lg font-semibold lg:text-2xl">
                      {item.testimonial_name}
                    </h6>
                    <span className="font-montserrat text-slate-500 2xl:text-lg lg:text-lg">
                      {item.text_block}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 justify-center sm:justify-end items-center">
                  <div
                    className=" bg-gray-200  p-6 w-[1 rem] h-[1.5 rem] hover:cursor-pointer rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl"
                    onClick={previous}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5436/5436533.png"
                      alt=""
                      className="w-6 h-6 "
                    />
                  </div>
                  <div
                    className=" bg-gray-200 p-6 w-[1 rem] h-[1.5 rem] hover:cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl rounded-full"
                    onClick={next}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/5436/5436598.png"
                      alt=""
                      className="w-6 h-6 "
                    />
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Testimonials;
