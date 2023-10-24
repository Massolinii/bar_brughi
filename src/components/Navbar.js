"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../styles/Navbar.css";
import logo from "../images/logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Menù", path: "/menu" },
    { name: "Chi siamo", path: "/chi-siamo" },
  ];

  return (
    <div className="bg-magenta sticky top-0 z-50 w-full border-b-2 border-black ">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="logo">
          <a href="/" className="no-underline text-white">
            <img
              src={logo.src}
              alt="Some description"
              className="w-[60px] h-[60px]"
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`border-animation py-2 px-3 relative overflow-hidden no-underline text-white text-lg`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-4xl transform transition-transform duration-300 ${
              isOpen ? "rotate-135" : ""
            }`}
          >
            +
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="flex flex-col space-y-4 p-2 bg-magenta bg-opacity-70 w-4/5"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-4xl py-3 px-2 no-underline text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
