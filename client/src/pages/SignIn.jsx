import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl flex-col md:flex-row md:items-center gap-5">
          {/* left side */}
          <div className="flex-1">
            <Link to="/" className="sm:text-xl font-bold text-4xl rounded-lg">
              <span className="px-2 ">
                {/* <img src={logo} className="" alt="apollo om" /> */}
              </span>
            </Link>
          </div>
          {/* right side */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Email" />
                <TextInput
                  type="text"
                  placeholder="name@company.com"
                  id="email"
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="***********"
                  id="password"
                />
                <Button
                  className="bg-[#00994B] px-2 mt-6"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
