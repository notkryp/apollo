import React from "react";
import { Button } from "flowbite-react";

const PhotoCardDetails = () => {
  return (
    <div className="flex-col justify-center p-6 gap-3 flex rounded-xl w-80 xl:w-[650px] xl:gap-5 xl:h-[450px] xl:p-10 md:w-[350px] lg:w-[600px] lg:h-[400px] lg:px-8">
      <h1 className="font-montserrat font-semibold text-lg xl:text-2xl lg:text-2xl">
        Name of The Founder
      </h1>
      <h3 className="text-slate-800 font-montserrat sm:text-lg xl:text-xl lg:text-xl">
        Founder
      </h3>
      <p className="font-palanquin leading-7 sm:text-[16px] text-slate-700 md:text-lg xl:text-semibold info-text ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. and typesetting industry and typesetting industryand
        typesetting orem Ipsum 
      </p>
      <p className=" font-palanquin leading-7 sm:text-[16px] text-justify md:text-lg xl:text-semibold hidden xl:block lg:block info-text">
        industry. and typesetting industry and typesetting industryandis simply dummy text of the printing and typesetting
        industry. and typesetting industry and typesetting industryand
      </p>
      <Button className="bg-[#00994B] flex w-full md:w-max lg:w-max xl:w-max">Read More</Button>
    </div>
  );
};

export default PhotoCardDetails;
