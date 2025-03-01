import React from "react";
import "../index.css";
import Category from "./Category.jsx";
import Color from "./Color.jsx";
import Price from "./Price.jsx";
import { useState } from "react";

const Sidebar = ({ handleChange }) => {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <section className="w-60 h-full flex flex-col border-r-gray-500 p-4 shadow-sm items-center sidebar">
        <div className="pb-[4rem] mt-3">
          <div> 🛒</div>
        </div>
        <Category handleChange={handleChange} />
        <Color handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
