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
            className="text-white-200 font-bold bg-radial-gradient p-10 rounded-[100%]"
          >
            Investment Calculator
          </Link>
        </li>
        <li>
          <Link
            to="/countdown-timer"
            className="text-white-200 font-bold bg-radial-gradient p-10 rounded-[100%]"
          >
            Countdown Timer
          </Link>
        </li>
        <li>
          <Link
            to="/project-management-app"
            className="text-white-200 font-bold bg-radial-gradient p-10 rounded-[100%]"
          >
            Project Management App
          </Link>
          {/* <Link
            to="/shopify-api"
            className="text-white-200 font-bold bg-radial-gradient p-10 rounded-[100%]"
          >
            Shopify Api's Product
          </Link> */}
          <Link
            to="/ecom"
            className="text-white-200 font-bold bg-radial-gradient p-10 rounded-[100%]"
          >
            E-commerce
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
