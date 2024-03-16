import React from "react";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Admission from "./pages/Admission";
import AboutUs from "./pages/AboutUs";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import FacultyCard from "./components/FacultyCard";
import StudentsCard from "./components/StudentsCard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/faculty" element={<FacultyCard />} />
          <Route path="/gallery/students" element={<StudentsCard />} />
        </Routes>
        <section className="bg-[#00994B] padding-x padding-t pb-8 mt-3">
          <Footer />
        </section>
      </BrowserRouter>
    </>
  );
};

export default App;
