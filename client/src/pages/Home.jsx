import founder from "../assets/founder.jpg";
import { Button } from "flowbite-react";
import Line from "../assets/Line.png";
import school from "../assets/school.jpg";
import arrowRight from "../assets/arrow-right.png";
import PhotoCardDetails from "../components/PhotoCardDetails";
import CourseCard from "../components/CourseCard";
import { useNavigate } from "react-router-dom";
import NoticeBoard from "../components/NoticeBoard";
import { Carousel } from "flowbite-react";
import { images } from "../Constants";
import excellence from "../assets/excellence.png";
import quality from "../assets/quality.png";
import Testimonials from "../components/Testimonials";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  const handleClickGallery = () => {
    navigate("/gallery/students");
  }

  return (
    <>
      <div className="h-full">
        <section className="h-full w-full rounded-xl mt-6">
          <div className="grid h-[400px] sm:mb-[15%] 2xl:mb-[36px] grid-cols-1 sm:h-[400px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] relative mx-4">
            <Carousel
              indicators={false}
              pauseOnHover
              className="h-full xl:h-[600px] md:h-[400px] lg:h-[500px] xl:[600px] 2xl:[700px]"
            >
              {images.map((image, key2) => (
                <React.Fragment key={key2}>
                  <img
                    className="rounded-xl object-cover object-left-top h-full w-full"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="font-montserrat absolute bottom-0 left-0 flex flex-col items-center justify-center w-full bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-lg font-bold">{image.label}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </React.Fragment>
              ))}
            </Carousel>
          </div>
        </section>
        <section className="xl:mb-[200px] mt-[36px] flex justify-center items-center xl:mx-12 2xl:mx-12 mx-4">
          <div className="flex-row flex justify-center items-center lg:flex-row gap-12 2xl:flex ">
            <div className="shadow-2xl flex-col flex gap-5 p-4 rounded-2xl items-center justify-center flex-1 xl:flex xl:justify-center xl:items-cente transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer">
              <img
                src={school}
                alt="apollo school"
                className="rounded-xl w-[700px] h-[250px] md:h-[400px] object-cover flex-1"
              />

              <div className="flex-col flex flex-1 text-center">
                <span className="info-text text-">Welcome to</span>
                <h1 className="font-montserrat text-[#00994B] font-bold text-2xl">
                  Apollo Om English Boarding School
                </h1>
                <br />
                <p className="info-text ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  possimus adipisci omnis! Ab ducimus molestias voluptates
                  recusandae quis quaerat fugit accusamus quas dolorum,
                  similique nulla tenetur numquam eius voluptatum veniam.
                </p>
              </div>
              <Button className="bg-[#00994B] flex w-full sm:w-max md:w-max lg:w-max xl:w-max ">
                Read More
              </Button>
            </div>
            <div className="hidden lg:block lg:h-1/2 justify-center items-center rounded-3xl 2xl:flex">
              <NoticeBoard />
            </div>
          </div>
        </section>
        <section className="flex xl:mb-[150px] justify-center items-center p-8">
          <div className="flex flex-col justify-center items-center gap-6 sm:flex-row sm:mx-3 sm:h-[550px] md:ml-4">
            <div className="rounded-xl flex flex-1 w-full justify-center sm:w-[300px] md:w-[400px] md:h-[450px] xl:w-[500px] xl:h-[550px] lg:w-[400px] lg:h-[450px] ">
              <img
                src={founder}
                alt="founder apollo school"
                className="rounded-xl sm:h-[400px] object-cover sm:w-full md:h-full md:w-[350px] xl:w-full xl:h-full lg:h-full lg:w-full"
              />
            </div>
            <div className="rounded-xl flex-1 bg-white top-72 flex w-full shadow-2xl sm:flex  sm:ml-[-55px] md:ml-[-80px] lg:ml-[-70px] xl:ml-[-80px] sm:rounded-xl sm:h-[320px] md:h-[360px] xl:h-max lg:h-max  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:cursor-pointer">
              <PhotoCardDetails />
            </div>
          </div>
        </section>
        <section className="flex-col m-12 gap-8 flex ">
          <div className="flex-col flex gap-3">
            <div className="flex gap-6 items-center ">
              <img src={Line} alt="" />
              <h1 className="text-bold font-montserrat text-3xl text-[#00994B] flex-1">
                Courses
              </h1>
              <img
                className="items-end flex-2 cursor-pointer"
                src={arrowRight}
                alt=""
                onClick={handleClick}
              />
            </div>
            <p className="text-slate-500 font-palanquin font-semibold w-auto h-auto leading-7 text-3xl ">
              Explore through our Courses
            </p>
            <div className="flex-col m-12 justify-center items-center flex xl:flex-row">
              <div className="md:flex">
                <CourseCard />
                <CourseCard />
              </div>
              <div className="md:flex">
                <CourseCard />
                <CourseCard />
              </div>
            </div>
          </div>
        </section>
        <section className="px-8">
          <div className="flex gap-6 items-center px-4 ">
            <img src={Line} alt="" />
            <h1 className="text-bold font-montserrat text-3xl text-[#00994B] flex-1">
              Gallery
            </h1>
            <img
              className="items-end flex-2 cursor-pointer"
              src={arrowRight}
              alt=""
              onClick={handleClick}
            />
          </div>
          <br />
          <p className="  px-6 text-slate-500 font-palanquin font-semibold w-auto h-auto leading-7 text-3xl ">
            Explore through our Gallery
          </p>
          {/* rest of the screen */}
          <div className="min-h-screen mt-24 items-center justify-center flex xl:hidden 2xl:hidden">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-9/132953427_165938178644609_6495006968116880340_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=SgmYbcFnK08AX9rzYGb&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDV3kPXSKE8e2kKLo_umi9KjTaMqNdZTcozASIf5B_cJw&oe=6608D67B"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-montserrat text-3xl font-bold text-white">
                    Sports Week
                  </h1>
                  <Button className="rounded-full bg-[#00994B] mt-3 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </Button>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/331761285_725660765885479_2929340901272569410_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=JD9NETum2-UAX9TG0b6&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBgrPVZ40W3mzBzB9eo9sV4cz_MB1eSMpZsxSufeD7DnA&oe=65E731E6"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Parents Day
                  </h1>
                  <Button className="rounded-full bg-[#00994B] mt-3 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </Button>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/379311724_798509455614311_2776797308212924132_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=npAwmK_6lWIAX-OSC-1&_nc_ht=scontent.fktm20-1.fna&oh=00_AfAAFQcuWCAmYNgSFwwVa5YLcHFetPLtrS8_CKJEj7h2Hw&oe=65E66FB1"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Saraswoti Puja
                  </h1>

                  <Button className="rounded-full bg-[#00994B] mt-3 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </Button>
                </div>
              </div>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/418159355_903611075104148_7415533414848579345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1d52U2EdkbQAX9Z3tMt&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBTSqnJVN2yTuWFJu9gvNlwcGjy746MRd-UqBOdslev_g&oe=65E5DB4E"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">
                    Saraswoti Puja
                  </h1>

                  <Button className="rounded-full bg-[#00994B] mt-3 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* xl and 2xl */}
          <div className="max-h-screen 2xl:mt-[96px] xl:mt-[72px] items-center justify-center hidden xl:flex 2xl:flex">
            <div className="mx-3 max-w-6xl px-3">
              <div  className="flex [&:hover>div]:w-[20rem] [&>div:hover]:w-[50rem]">
                <div  onClick={handleClickGallery} className="group relative h-96 w-[50rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-9/132953427_165938178644609_6495006968116880340_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=SgmYbcFnK08AX9rzYGb&_nc_ht=scontent.fktm20-1.fna&oh=00_AfDV3kPXSKE8e2kKLo_umi9KjTaMqNdZTcozASIf5B_cJw&oe=6608D67B"
                    alt=""
                    
                  />
                  <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                    <div className="absolute inset-x-5 bottom-5">
                      <div className="flex gap-3 text-white">
                        <div>
                          <p className="font-sembold text-xl text-gray-100">
                            Students of Grade 8
                          </p>
                          <p className="text-gray-300">Site Visit exhibition</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 group relative h-96 w-[20rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/331761285_725660765885479_2929340901272569410_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=JD9NETum2-UAX9TG0b6&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBgrPVZ40W3mzBzB9eo9sV4cz_MB1eSMpZsxSufeD7DnA&oe=65E731E6"
                    alt=""
                  />
                  <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                    <div className="absolute inset-x-5 bottom-6">
                      <div className="flex gap-3 text-white">
                        <div>
                          <p className="font-sembold text-xl text-gray-100">
                            Grade 2 Students
                          </p>
                          <p className="text-gray-300">Prize Distribution</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border-l-4 group relative h-96 w-[20rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/379311724_798509455614311_2776797308212924132_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=npAwmK_6lWIAX-OSC-1&_nc_ht=scontent.fktm20-1.fna&oh=00_AfAAFQcuWCAmYNgSFwwVa5YLcHFetPLtrS8_CKJEj7h2Hw&oe=65E66FB1"
                    alt=""
                  />
                  <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                    <div className="absolute inset-x-5 bottom-6">
                      <div className="flex gap-3 text-white">
                        <div>
                          <p className="font-sembold text-xl text-gray-100">
                            Student dancing
                          </p>
                          <p className="text-gray-300">Parents Day 2023</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border-l-4 group relative h-96 w-[20rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src="https://scontent.fktm20-1.fna.fbcdn.net/v/t39.30808-6/418159355_903611075104148_7415533414848579345_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1d52U2EdkbQAX9Z3tMt&_nc_ht=scontent.fktm20-1.fna&oh=00_AfBTSqnJVN2yTuWFJu9gvNlwcGjy746MRd-UqBOdslev_g&oe=65E5DB4E"
                    alt=""
                  />
                  <div className="invisible absolute inset-0 bg-gradient-to-b from-green-500/20 to-black group-hover:visible">
                    <div className="absolute inset-x-5 bottom-6">
                      <div className="flex gap-3 text-white">
                        <div>
                          <p className="font-sembold text-xl text-gray-100">
                            Cricket Competition
                          </p>
                          <p className="text-gray-300">Sports Week 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" h-auto w-full mt-36">
          <div className="">
            <div className="bg-[#00994B] flex flex-row items-center justify-center gap-6 p-6">
              <div className="object-cover flex flex-col items-center justify-center flex-1 ">
                <img
                  src={excellence}
                  alt="apollo om"
                  className="object-cover w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-40 2xl:h-40"
                />
                <h1 className=" text-bold text-xl font-montserrat 2xl:text-6xl md:text-2xl text-white leading-7 xl:tex-3xl">
                  100%
                </h1>
                <p className="text-white text-md font-montserrat leading-7 2xl:text-lg">
                  Excellence
                </p>
              </div>
              <div className="object-cover flex flex-col items-center justify-center flex-1">
                <img
                  src={quality}
                  alt="apollo om"
                  className="mb-2 2xl:mb-8 object-cover w-10 h-10 sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-24 xl:h-24 2xl:w-24  2xl:h-24"
                />
                <h1 className=" text-bold text-xl 2xl:text-6xl font-montserrat text-white md:text-2xl xl:text-3xl">
                  100%
                </h1>
                <p className="text-white text-md font-montserrat 2xl:text-lg ">
                  Quality
                </p>
              </div>
              <div className="object-cover flex flex-col items-center justify-center flex-1">
                <img
                  src={excellence}
                  alt="apollo om"
                  className="object-cover w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-40 2xl:h-40"
                />
                <h1 className="  text-bold text-xl font-montserrat 2xl:text-6xl md:text-2xl text-white leading-7 xl:tex-3xl">
                  100%
                </h1>
                <p className="text-white text-md font-montserrat leading-7 2xl:text-lg">
                  Leading
                </p>
              </div>

              <div className="object-cover flex flex-col items-center justify-center flex-1">
                <img
                  src={excellence}
                  alt="apollo om"
                  className="object-cover w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-40 2xl:h-40"
                />
                <h1 className="  text-bold text-xl font-montserrat 2xl:text-6xl md:text-2xl text-white leading-7 xl:tex-3xl">
                  1000+
                </h1>
                <p className="text-white text-md font-montserrat leading-7 2xl:text-lg">
                  Students
                </p>
              </div>
                

            </div>
          </div>
        </section>
        <section className="flex 2xl:h-[80vh] h-[90vh] 2xl:mx-72 px-8 sm:px-12 lg:px-24 lg:h-[100vh] md:px-24 justify-center items-center">
          <Testimonials />
        </section>
      </div>
    </>
  );
};

export default Home;
