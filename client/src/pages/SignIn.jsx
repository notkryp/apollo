import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log(user)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.email ||
      !user.password ||
      user.email === "" ||
      user.password === ""
    ) {
      alert("All fields are required from frontend");
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (data.success === false) {
        alert(data.message);
      }

      if (res.ok) {
        navigate("/dashboard");
        alert("Login Successfull");
      }
    } catch (error) {
      alert(error.message);
    }
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
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="***********"
                  id="password"
                  onChange={handleChange}
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
