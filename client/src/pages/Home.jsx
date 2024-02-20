import founder from "../assets/founder.jpg";
import { Button } from "flowbite-react";
import PhotoCard from "../components/PhotoCard";
import PhotoCardDetails from "../components/PhotoCardDetails";

const Home = () => {
  return (
    <>
      <section>Carasoul</section>
      <section>Welcome+Notice</section>
      {/* <section className='max-container max-sm:flex-col flex max-sm:px-6 sm:max-lg:px-8 mb-4'>
        <div className='flex-1 max-sm:flex-col flex'>
          <div className='flex-1 flex'>
            <img src={founder} alt="founder apollo" className='content-fill max-sm:w-full rounded-[36px] sm:max-md:w-[100%] sm:max-md:h-[100%] md:max-lg:h-full'/> 
          </div>
          <div className='flex-1 flex sm:max-md:flex flex-col  max-sm:ml-[10%] gap-3 border-2 border-black bg-white max-sm:shadow-xl max-sm:p-6 max-sm:rounded-[24px] max-sm:mt-[-20%] max-sm:w-[80%] max-sm:h-[90%] sm:max-md:ml-[-10%] sm:max-md:rounded-[36px] sm:max-md:p-8 sm:max-md:w-[80%] sm:max-md:h-[90%] sm:max-md:my-[3%] sm:max-md:shadow-2xl md:max-lg:p-8 md:max-lg:rounded-[36px] md:max-lg:h-[90%] md:max-lg:mt-[24px] md:max-lg:ml-[-48px] w-[100%] h-[100%]'
          >
            <h1 className='font-montserrat font-semibold max-sm:text-lg'>Name of The Founder</h1>
            <h3 className='text-slate-600 font-montserrat max-sm:text-lg'>Founder</h3>
            <p className='font-palanquin leading-7 max-sm:text-[16px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
            <Button className="bg-[#00994B]">
            Read More
          </Button>
          </div>
        </div>
      </section> */}
      <section className="flex justify-center items-center p-8">
        <div className="flex border-2 border-green-900 flex-col justify-center items-center relative">
          <div className="flex border-2 border-black flex-1 relative">
            <PhotoCard />
          </div>
          <div className="border-2 border-black flex-1 absolute bg-white top-72 w-2/3 flex b-42">
            <PhotoCardDetails />
          </div>
        </div>
      </section>
      <section className="mt-[350px]">courses</section>
      <section>Gallery</section>
      <section>Band</section>
      <section>Testimonials</section>
    </>
  );
};

export default Home;
