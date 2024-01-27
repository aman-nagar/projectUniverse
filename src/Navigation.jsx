// Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="h-full p-20 ">
      <ul className="flex justify-around items-center h-full">
        <li className="">
          <Link
            to="/investment-calculator"
            className="text-black bg-slate-200 p-10 rounded-[100%]"
          >
            Investment Calculator
          </Link>
        </li>
        <li>
          <Link
            to="/countdown-timer"
            className="text-black bg-slate-200 p-10 rounded-[100%]"
          >
            Countdown Timer
          </Link>
        </li>
        <li>
          <Link
            to="/project-management-app"
            className="text-black bg-slate-200 p-10 rounded-[100%]"
          >
            Project Management App
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
