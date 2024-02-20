import React from "react";
import { Button } from "flowbite-react";

const PhotoCardDetails = () => {
  return (
    <div className="flex-col p-3 gap-3 flex rounded-xl">
      <h1 className="font-montserrat font-semibold max-sm:text-lg">
        Name of The Founder
      </h1>
      <h3 className="text-slate-600 font-montserrat max-sm:text-lg">Founder</h3>
      <p className="font-palanquin leading-7 max-sm:text-[16px] text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it{" "}
      </p>
      <Button className="bg-[#00994B]">Read More</Button>
    </div>
  );
};

export default PhotoCardDetails;
