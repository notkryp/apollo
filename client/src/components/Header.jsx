import React from "react";
import { Navbar, Button } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import logoOnly from "../assets/pngOm.png";

const Header = () => {
  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link to="/" className="self-center whitespace-nowrap font-semibold">
        <span>
          <img src={logo} className="hidden lg:inline" alt="apollo om" />
          <img
            src={logoOnly}
            className="lg:hidden h-20 w-20 ml-4"
            alt="apollo om"
          />
        </span>
      </Link>
      <div className="flex gap-4 md:order-2">
        <Link to="/sign-in">
          <Button className="bg-[#00994B]">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="font-montserrat">
        <Navbar.Link active={path === "/"} as={"div"} className={path === "/" ? "bg-[#00994B]" : ""}>
          <Link
            className="hover:text-[#00994B] focus:text-black xl:focus:text-[#00994B] text-black"
            to="/"
          >
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about-us"} as={"div"} className={path === "/about-us" ? "bg-[#00994B]" : ""}>
          <Link
            className="hover:text-[#00994B] focus:text-black xl:focus:text-[#00994B] text-black"
            to="/about-us"
          >
            About Us
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/admission"} as={"div"} className={path === "/admission" ? "bg-[#00994B]" : ""}>
          <Link
            className="hover:text-[#00994B] focus:text-black xl:focus:text-[#00994B] text-black"
            to="/admission"
          >
            Admission
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/gallery"} as={"div"} className={path === "/gallery" ? "bg-[#00994B]" : ""}>
          <Link
            className="hover:text-[#00994B] focus:text-black xl:focus:text-[#00994B] text-black"
            to="/gallery"
          >
            Gallery
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact-us"} as={"div"} className={path === "/contact-us" ? "bg-[#00994B]" : ""}>
          <Link
            className="hover:text-[#00994B] focus:text-black xl:focus:text-[#00994B] text-black"
            to="/contact-us"
          >
            Contact Us
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
