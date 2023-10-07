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
    { name: "Home", path: "/" },
    { name: "Chi siamo", path: "/chi-siamo" },
    { name: "Servizi", path: "/servizi" },
    { name: "Galleria", path: "/galleria" },
    { name: "Contatti", path: "/contatti" },
  ];

  return (
    <div className="bg-gray-900 text-white fixed top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <h1 className="text-2xl">Bar Brughi</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className={`border-animation p-2 hover:text-gray-300 relative overflow-hidden`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-2xl transform transition-transform duration-300 ${
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
                className="text-4xl hover:text-gray-300"
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
