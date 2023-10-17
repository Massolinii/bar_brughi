"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../styles/Navbar.css";

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
    { name: "Menù", path: "/servizi" },
    { name: "Chi siamo", path: "/chi-siamo" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <div className="font-nunito bg-magenta text-white sticky top-0 z-50 w-full border-b-2 border-gray-800 ">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="logo">
          <a href="/" className="no-underline text-white">
            <h1 className="text-2xl m-0">Bar Brughi</h1>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`border-animation py-3 px-4 hover:text-gray-300 relative overflow-hidden no-underline text-white`} // added no-underline and text-white
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-4xl transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
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
            className="flex flex-col space-y-4 p-5 bg-white bg-opacity-50"
            onClick={(e) => e.stopPropagation()}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="text-4xl hover:text-gray-300 no-underline text-white"
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
