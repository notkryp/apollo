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
          <Button className="bg-[#00994B]">
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="font-montserrat">
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link className="hover:text-[#00994B]" to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about-us"} as={"div"}>
          <Link className="hover:text-[#00994B]" to="/about-us">About Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/admission"} as={"div"}>
          <Link  className="hover:text-[#00994B]" to="/admission">Admission</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/gallery"} as={"div"}>
          <Link className="hover:text-[#00994B]" to="/gallery">Gallery</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/contact-us"} as={"div"}>
          <Link className="hover:text-[#00994B]" to="/contact-us">Contact Us</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
