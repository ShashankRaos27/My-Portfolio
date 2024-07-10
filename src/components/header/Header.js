import React, { useState, useEffect } from "react";
import { Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`md:static fixed top-0 left-0 w-full z-20 bg-white dark:bg-darkBackground shadow-md`}
    >
      <div className="flex justify-between items-center py-4 px-5">
        <div>
          <a href="/" className="logo">
            <span className="grey-color dark:text-white"> &lt;</span>
            <span className="logo-name dark:text-white">Shashank Rao</span>
            <span className="grey-color dark:text-white">/&gt;</span>
          </a>
        </div>
        <div className="hidden md:flex flex-wrap items-center gap-5">
          <div className="py-4 px-5">
            <a href="#skills" className="dark:text-white">
              Skills
            </a>
          </div>
          <div className="py-4 px-5">
            <a href="#experience" className="dark:text-white">
              Work Experiences
            </a>
          </div>
          <div className="py-4 px-5">
            <a href="#opensource" className="dark:text-white">
              Open Source
            </a>
          </div>
          <div className="py-4 px-5">
            <a href="#achievements" className="dark:text-white">
              Education
            </a>
          </div>
          <div className="py-4 px-5">
            <a href="#resume" className="dark:text-white">
              Resume
            </a>
          </div>
          <div className="py-4 px-5">
            <a href="#contact" className="dark:text-white">
              Contact Me
            </a>
          </div>
          <div>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-darkBackground z-10 flex flex-col items-center justify-center">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 focus:outline-none"
          >
            <svg
              className="w-6 h-6 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="py-4 px-5">
            <a
              href="#skills"
              onClick={toggleMobileMenu}
              className="dark:text-white"
            >
              Skills
            </a>
          </div>
          <div className="py-4 px-5">
            <a
              href="#experience"
              onClick={toggleMobileMenu}
              className="dark:text-white"
            >
              Work Experiences
            </a>
          </div>
          <div className="py-4 px-5">
            <a
              href="#opensource"
              onClick={toggleMobileMenu}
              className="dark:text-white"
            >
              Open Source
            </a>
          </div>
          <div className="py-4 px-5">
            <a
              href="#achievements"
              onClick={toggleMobileMenu}
              className="dark:text-white"
            >
              Education
            </a>
          </div>
          <div className="py-4 px-5">
            <a
              href="#resume"
              onClick={toggleMobileMenu}
              className="dark:text-white"
            >
              Resume
            </a>
          </div>
          <div className="py-4 px-5">
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className="dark:text-white"
            >
              Contact Me
            </a>
          </div>
          <div>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
