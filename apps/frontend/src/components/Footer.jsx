import React from "react";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">HR.LIRA</h3>
        <div className="flex flex-row gap-6 text-gray-300 text-4xl">
          <a href="https://github.com/henriquelira2"  className="text-4xl hover:scale-125 transition-transform duration-200">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/heim_rikl/"  className="text-4xl hover:scale-125 transition-transform duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-300">@2024 HR.LIRA</p>
    </div>
  );
};

export default Footer;
