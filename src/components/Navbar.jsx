import React from "react";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 bg-primary text-white text-2xl font-bold">
        <div>
        <h1>Innovatrix Academy</h1>
        </div>
        <div className="text-4xl btn btn-link text-white ">
        <h1><IoMoonOutline />
        </h1>
        </div>
      </div>
      <div className="text-center text-3xl font-bold m-7">
        <h1>Admission Form</h1>
      </div>
    </>
  );
};

export default Navbar;
