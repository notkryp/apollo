import React, { useState } from "react";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); 

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.fathersName ||
      !formData.mothersName ||
      !formData.phoneNumber ||
      !formData.emailAddress
    ) {
      console.log("Please fill in all the fields");
    }
    try {
      const res = await fetch("http://localhost:3000/api/form/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert(data.message)
        navigate("/")
      }
    } catch (error) {
      formData.error = error;
    }
  };

  return (
    <section className="h-[100vh] px-[2rem] font-montserrat">
      <div className=" 2xl:flex flex-col h-full items-center justify-start flex 2xl:justify-start">
        <div className="flex-col flex items-center justify-center">
          <h2 className="text-[2rem] font-montserrat mb-[-3.5rem] mt-[1rem] text-bold text-slate-600">
            Would
          </h2>
          <h1 className="text-[8rem] font-montserrat text-[#00994B] font-bold">
            You
          </h1>
          <span className="font-montserrat text-[1rem] mt-[-2.5rem] font-bold text-slate-600">
            Like to Join our school?
          </span>
        </div>
        <div className="flex-col flex">
          <form
            onSubmit={handleSubmit}
            className="flex-col flex flex-1 items-center justify-center 2xl:gap-6 sm:px-[6rem]  gap-4 mt-[2rem]"
          >
            <input
              type="text"
              className="rounded-lg focus:border-[#00994B] focus:border-2 w-full placeholder:text-slate-600 xl:w-[30rem]"
              style={{ boxShadow: "none" }}
              placeholder=" Full name"
              onChange={handelChange}
              id="fullName"
            />
            <input
              type="text"
              className="rounded-lg focus:border-[#00994B] focus:border-2 w-full placeholder:text-slate-600 xl:w-[30rem]"
              style={{ boxShadow: "none" }}
              placeholder=" Father's Name"
              onChange={handelChange}
              id="fathersName"
            />
            <input
              type="text"
              className="rounded-lg focus:border-[#00994B] focus:border-2 w-full placeholder:text-slate-600 xl:w-[30rem]"
              style={{ boxShadow: "none" }}
              placeholder=" Mother's Name"
              onChange={handelChange}
              id="mothersName"
            />
            <input
              type="number"
              className="rounded-lg focus:border-[#00994B] focus:border-2 w-full placeholder:text-slate-600 xl:w-[30rem]"
              style={{ boxShadow: "none" }}
              placeholder=" Phone Number"
              onChange={handelChange}
              id="phoneNumber"
            />
            <input
              type="email"
              className="rounded-lg focus:border-[#00994B] focus:border-2 w-full placeholder:text-slate-600] xl:w-[30rem]"
              style={{ boxShadow: "none" }}
              placeholder=" Email-address"
              onChange={handelChange}
              id="emailAddress"
            />
            <Button
              className="bg-[#00994B] font-montserrat items-start mt-4"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Admission;
