import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto  flex justify-between text-gray-200 text-xl items-center px-12 h-20 ">
        <a href="#" className=" flex w-20 flex-row justify-center items-center">
          <img src={logo} /> HR.LIRA
        </a>
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Projetos
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              CV
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} offset={50} duration={500}>
              Contato
            </Link>
          </li>
        </ul>
        <div onClick={toggleNav} className="md:hidden z-30 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-20"
        >
          <ul className="font-semibold text-4x1 space-y-8 mt-24 text-center">
            <li>
              <Link
                to="skills"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="projetos"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="CV"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contato
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
